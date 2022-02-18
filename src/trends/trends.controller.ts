import { Controller, Get, Logger, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TimedRequestService } from '../timed-request/timed-request.service';
import { PaginationQueryDto } from './dto/pagination-query.dto';
import { SearchQueryDto } from './dto/search-query.dto';
import { TrendsService } from './trends.service';

@ApiTags('trends')
@Controller('trends')
export class TrendsController {
  private readonly logger = new Logger(TrendsController.name);

  constructor(
    private readonly trendsService: TrendsService,
    private readonly timedRequestService: TimedRequestService,
  ) {
    // this.timedRequestService.init(this.saveTrends.bind(this), 86400000);
  }

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.trendsService.findAll(paginationQuery);
  }

  @Get('sync')
  sync() {
    const res = this.timedRequestService.sync();
    this.logger.log('Interval was refreshed');
    return res;
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query() searchQuery: SearchQueryDto) {
    return this.trendsService.findOne(id, searchQuery);
  }

  saveTrends() {
    const trends = this.trendsService.saveTrends();
    this.logger.log('Trend repositories saved');
    return trends;
  }
}
