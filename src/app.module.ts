import { Module } from '@nestjs/common';
import { TrendsModule } from './trends/trends.module';
import { TimedRequestModule } from './timed-request/timed-request.module';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    TrendsModule,
    TimedRequestModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
