import { Controller, Get, Param, Query } from '@nestjs/common';
import { TimedRequestService } from 'src/timed-request/timed-request.service';
import { SearchQueryDto } from './dto/search-query.dto';
import { TrendsService } from './trends.service';
import { Logger } from '@nestjs/common';

@Controller('trends')
export class TrendsController {
  constructor(
    private readonly trendsService: TrendsService,
    private readonly timedRequestService: TimedRequestService,
  ) {
    this.timedRequestService.init((mes) => Logger.log(mes), 5000, 'test');
  }

  @Get()
  findAll(): string {
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
}
