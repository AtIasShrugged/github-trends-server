import { Module } from '@nestjs/common';
import { TrendsController } from './trends/trends.controller';

@Module({
  imports: [],
  controllers: [TrendsController],
  providers: [],
})
export class AppModule {}
