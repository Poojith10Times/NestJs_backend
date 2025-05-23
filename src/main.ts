import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ZodValidationPipe } from 'nestjs-zod';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS
  app.enableCors();
  
  // Use Zod validation pipe instead of class-validator
  app.useGlobalPipes(new ZodValidationPipe());
  
  // Global prefix
  app.setGlobalPrefix('api');
  
  await app.listen(2000);
}
bootstrap();