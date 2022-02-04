import { Module } from '@nestjs/common';
import { TimedRequestService } from './timed-request.service';
import { TimedRequestController } from './timed-request.controller';

@Module({
  providers: [TimedRequestService],
  controllers: [TimedRequestController],
  exports: [TimedRequestService],
})
export class TimedRequestModule {}
