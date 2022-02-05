import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TrendRepositoryDocument = TrendRepository & Document;

@Schema()
export class TrendRepository {
  @Prop()
  repositoryName: string;

  @Prop()
  username: string;

  @Prop()
  url: string;

  @Prop()
  description: string;

  @Prop()
  language: string;

  @Prop()
  totalStars: number;

  @Prop()
  forks: number;
}

export const TrendRepositorySchema =
  SchemaFactory.createForClass(TrendRepository);
