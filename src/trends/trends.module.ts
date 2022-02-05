import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TimedRequestModule } from 'src/timed-request/timed-request.module';
import { TrendsController } from './trends.controller';
import { TrendsService } from './trends.service';

@Module({
  imports: [TimedRequestModule, HttpModule],
  controllers: [TrendsController],
  providers: [TrendsService],
})
export class TrendsModule {}
