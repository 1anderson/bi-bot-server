import { Test, TestingModule } from '@nestjs/testing';
import { MapDaoService } from './map-dao.service';

describe('MapDaoService', () => {
  let service: MapDaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MapDaoService],
    }).compile();

    service = module.get<MapDaoService>(MapDaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
