import { Test, TestingModule } from '@nestjs/testing';
import { CsgoDemoDownloadService } from './csgo-demo-download.service';

describe('CsgoDemoDownloadService', () => {
  let service: CsgoDemoDownloadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CsgoDemoDownloadService],
    }).compile();

    service = module.get<CsgoDemoDownloadService>(CsgoDemoDownloadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
