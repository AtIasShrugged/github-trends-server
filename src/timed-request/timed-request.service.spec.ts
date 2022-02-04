import { Test, TestingModule } from '@nestjs/testing';
import { TimedRequestService } from './timed-request.service';

describe('TimedRequestService', () => {
  let service: TimedRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimedRequestService],
    }).compile();

    service = module.get<TimedRequestService>(TimedRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
