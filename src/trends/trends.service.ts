import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTrendDto } from './dto/create-trend.dto';
import { SearchQueryDto } from './dto/search-query.dto';
import axios from 'axios';
import {
  TrendRepository,
  TrendRepositoryDocument,
} from './schemas/trendRepository.schema';
import { PaginationQueryDto } from './dto/pagination-query.dto';

@Injectable()
export class TrendsService {
  constructor(
    @InjectModel(TrendRepository.name)
    private trendRepositoryModel: Model<TrendRepositoryDocument>,
  ) {}

  findAll(paginationQuery: PaginationQueryDto) {
    const { limit = 10, offset = 0 } = paginationQuery;

    return this.trendRepositoryModel
      .find({}, null, { limit: limit, skip: offset })
      .exec();
  }

  async findOne(id: string, searchQuery: SearchQueryDto) {
    let repository;
    if (searchQuery.filter === 'name') {
      repository = await this.trendRepositoryModel
        .findOne({ repositoryName: id })
        .exec();
    } else {
      repository = await this.trendRepositoryModel.findById(id).exec();
    }

    if (!repository) {
      throw new NotFoundException(`Trend repository #${id} not found`);
    }

    return repository;
  }

  async saveTrends() {
    const trendRepositoriesData = await axios.get(
      process.env.GITHUB_TRENDS_URL,
    );

    const trendRepositories: CreateTrendDto[] = trendRepositoriesData.data.map(
      (repo) => ({
        repositoryName: repo.repositoryName,
        username: repo.username,
        url: repo.url,
        description: repo.description,
        language: repo.language,
        totalStars: repo.totalStars,
        forks: repo.forks,
      }),
    );

    return this.trendRepositoryModel.insertMany(trendRepositories);
  }
}
