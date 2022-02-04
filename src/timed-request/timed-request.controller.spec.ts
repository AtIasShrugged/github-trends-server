import { Test, TestingModule } from '@nestjs/testing';
import { TimedRequestController } from './timed-request.controller';

describe('TimedRequestController', () => {
  let controller: TimedRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimedRequestController],
    }).compile();

    controller = module.get<TimedRequestController>(TimedRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
