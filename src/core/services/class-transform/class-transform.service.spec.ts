import { Test, TestingModule } from '@nestjs/testing';
import { ClassTransformService } from './class-transform.service';

describe('ClassTransformService', () => {
  let service: ClassTransformService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassTransformService],
    }).compile();

    service = module.get<ClassTransformService>(ClassTransformService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
