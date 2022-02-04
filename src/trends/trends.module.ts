import { Module } from '@nestjs/common';
import { TrendsController } from './trends.controller';

@Module({
  controllers: [TrendsController],
  providers: [],
})
export class TrendsModule {}
