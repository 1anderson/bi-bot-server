import { Test, TestingModule } from '@nestjs/testing';
import { ExtractorPlayerDataService } from './extractor-player-data.service';

describe('ExtractorPlayerDataService', () => {
  let service: ExtractorPlayerDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExtractorPlayerDataService],
    }).compile();

    service = module.get<ExtractorPlayerDataService>(ExtractorPlayerDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
