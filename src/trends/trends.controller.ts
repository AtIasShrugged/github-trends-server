import { Controller, Get, Param, Query } from '@nestjs/common';
import { SearchQueryDto } from 'src/common/dto/search-query.dto';

@Controller('trends')
export class TrendsController {
  @Get()
  findAll(): string {
    return 'This action returns all trends';
  }

  @Get('sync')
  sync() {
    return 'This action reset the internal timer for the automatic sync';
  }

  @Get('repo/:id')
  findOne(@Param('id') id: string, @Query() searchQuery: SearchQueryDto) {
    console.log(searchQuery);
    return `This action returns trend by id or name`;
  }
}
