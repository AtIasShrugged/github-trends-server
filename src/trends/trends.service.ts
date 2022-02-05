import { Injectable } from '@nestjs/common';
import { SearchQueryDto } from './dto/search-query.dto';

@Injectable()
export class TrendsService {
  findAll() {
    return `Service return all trends repositories`;
  }

  findOne(id: string, searchQuery: SearchQueryDto) {
    return `Service return trend #${id}`;
  }
}
