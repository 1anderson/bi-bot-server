import { Test, TestingModule } from '@nestjs/testing';
import { UserDao } from './user-dao';

describe('UserDaoService', () => {
  let service: UserDao;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserDao],
    }).compile();

    service = module.get<UserDao>(UserDao);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
