import { Test, TestingModule } from '@nestjs/testing';
import { ExtractorDemoDataService } from './extractor-demo-data.service';

describe('ExtractorDemoDataService', () => {
  let service: ExtractorDemoDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExtractorDemoDataService],
    }).compile();

    service = module.get<ExtractorDemoDataService>(ExtractorDemoDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
