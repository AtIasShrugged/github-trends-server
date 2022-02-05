import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTrendDto } from './dto/create-trend.dto';
import { SearchQueryDto } from './dto/search-query.dto';
import axios from 'axios';
import {
  TrendRepository,
  TrendRepositoryDocument,
} from './schemas/trendRepository.schema';

@Injectable()
export class TrendsService {
  constructor(
    @InjectModel(TrendRepository.name)
    private trendRepositoryModel: Model<TrendRepositoryDocument>,
  ) {}

  findAll() {
    return this.trendRepositoryModel.find().exec();
  }

  findOne(id: string, searchQuery: SearchQueryDto) {
    if (searchQuery.filter === 'name') {
      return this.trendRepositoryModel.findOne({ name: id }).exec();
    }

    return this.trendRepositoryModel.findById(id).exec();
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
