import { Test, TestingModule } from '@nestjs/testing';
import { ExceptionServiceService } from './exception-service.service';

describe('ExceptionServiceService', () => {
  let service: ExceptionServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExceptionServiceService],
    }).compile();

    service = module.get<ExceptionServiceService>(ExceptionServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
