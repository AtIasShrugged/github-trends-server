import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TimedRequestModule } from 'src/timed-request/timed-request.module';
import {
  TrendRepository,
  TrendRepositorySchema,
} from './schemas/trendRepository.schema';
import { TrendsController } from './trends.controller';
import { TrendsService } from './trends.service';

@Module({
  imports: [
    TimedRequestModule,
    MongooseModule.forFeature([
      { name: TrendRepository.name, schema: TrendRepositorySchema },
    ]),
  ],
  controllers: [TrendsController],
  providers: [TrendsService],
})
export class TrendsModule {}
