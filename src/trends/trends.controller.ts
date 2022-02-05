import { Controller, Get, Param, Query } from '@nestjs/common';
import { SearchQueryDto } from './dto/search-query.dto';
import { TrendsService } from './trends.service';

@Controller('trends')
export class TrendsController {
  constructor(private readonly trendsService: TrendsService) {}

  @Get()
  findAll(): string {
    return this.trendsService.findAll();
  }

  @Get('repo/:id')
  findOne(@Param('id') id: string, @Query() searchQuery: SearchQueryDto) {
    return this.trendsService.findOne(id, searchQuery);
  }
}
