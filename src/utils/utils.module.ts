import { Module } from '@nestjs/common';
import { SharedFunctionsService } from './shared-functions.service';

@Module({
    providers: [SharedFunctionsService],
    exports: [SharedFunctionsService],
})
export class UtilsModule { 
}
