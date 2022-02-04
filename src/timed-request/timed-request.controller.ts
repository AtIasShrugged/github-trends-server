import { Controller, Get } from '@nestjs/common';

@Controller('timed-request')
export class TimedRequestController {
  @Get('sync')
  sync() {
    return 'This action reset the internal timer for the automatic sync';
  }
}
