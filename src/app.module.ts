import { Module } from '@nestjs/common';
import { TrendsModule } from './trends/trends.module';

@Module({
  imports: [TrendsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
