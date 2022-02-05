import { Module } from '@nestjs/common';
import { TimedRequestService } from './timed-request.service';

@Module({
  providers: [TimedRequestService],
  exports: [TimedRequestService],
})
export class TimedRequestModule {}
