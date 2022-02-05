import { IsOptional } from 'class-validator';

type searchFilterType = 'id' | 'name';

export class SearchQueryDto {
  @IsOptional()
  filter: searchFilterType;
}
