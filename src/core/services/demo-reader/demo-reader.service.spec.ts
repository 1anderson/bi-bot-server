import { Test, TestingModule } from '@nestjs/testing';
import { DemoReaderService } from './demo-reader.service';

describe('DemoReaderService', () => {
  let service: DemoReaderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemoReaderService],
    }).compile();

    service = module.get<DemoReaderService>(DemoReaderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
