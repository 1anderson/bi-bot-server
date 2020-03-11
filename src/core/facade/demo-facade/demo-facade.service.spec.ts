import { Test, TestingModule } from '@nestjs/testing';
import { DemoFacadeService } from './demo-facade.service';

describe('DemoFacadeService', () => {
  let service: DemoFacadeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemoFacadeService],
    }).compile();

    service = module.get<DemoFacadeService>(DemoFacadeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
