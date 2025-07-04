import { Controller, Get } from '@nestjs/common';

@Controller('')
export class HealthController {
    @Get('/')
    getRoot(){
        return{
            status: 'success',
        }
    }
}
