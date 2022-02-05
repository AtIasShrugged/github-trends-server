import { Module } from '@nestjs/common';
import { TrendsModule } from './trends/trends.module';
import { TimedRequestModule } from './timed-request/timed-request.module';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.ywt8z.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`,
    ),
    TrendsModule,
    TimedRequestModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
