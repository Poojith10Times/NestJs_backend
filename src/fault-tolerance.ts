import { HttpException, HttpStatus } from '@nestjs/common';

export async function retryWithFaultHandling<T>(
  fn: () => Promise<T>,
  options?: { retries?: number; delayMs?: number; service?: 'redis' | 'postgres' | 'pgbouncer' },
): Promise<T> {
  const retries = options?.retries ?? 3;
  const delayMs = options?.delayMs ?? 100;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try 
    {
        return await fn();
    } catch (error: any) {
        const isLastAttempt = attempt === retries;

        if (isLastAttempt) {
            let service = options?.service ?? 'unknown';
            if (
              error?.message?.includes('6432') ||
              error?.message?.toLowerCase().includes('terminating connection') ||
              error?.message?.toLowerCase().includes('connection refused') ||
              error?.message?.toLowerCase().includes('pgbouncer')
            ) {
                service = 'pgbouncer';
            }
        
            const response: any = {
              message: `${service} is not available`,
              statusCode: HttpStatus.SERVICE_UNAVAILABLE,
            }
            if (service === 'pgbouncer') response.debounce = true;

            throw new HttpException(response, response.statusCode);
      }

      if (attempt < retries) {
        await new Promise(resolve => setTimeout(resolve, delayMs));
      }
    }
  }
  // fallback
  throw new HttpException('Unhandled service failure', HttpStatus.SERVICE_UNAVAILABLE);
}