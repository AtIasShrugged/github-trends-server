import { Controller, Get, Param, Query } from '@nestjs/common';
import { TimedRequestService } from '../timed-request/timed-request.service';
import { SearchQueryDto } from './dto/search-query.dto';
import { TrendsService } from './trends.service';

@Controller('trends')
export class TrendsController {
  constructor(
    private readonly trendsService: TrendsService,
    private readonly timedRequestService: TimedRequestService,
  ) {
    this.timedRequestService.init(this.saveTrends.bind(this), 1200000);
  }

  @Get()
  findAll() {
    return this.trendsService.findAll();
  }

  @Get('sync')
  sync() {
    return this.timedRequestService.sync();
  }

  @Get('repo/:id')
  findOne(@Param('id') id: string, @Query() searchQuery: SearchQueryDto) {
    return this.trendsService.findOne(id, searchQuery);
  }

  saveTrends() {
    return this.trendsService.saveTrends();
  }
}
