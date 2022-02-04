import { Module } from '@nestjs/common';
import { TrendsModule } from './trends/trends.module';
import { TimedRequestModule } from './timed-request/timed-request.module';

@Module({
  imports: [TrendsModule, TimedRequestModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
