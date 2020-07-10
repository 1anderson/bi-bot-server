import { Module } from '@nestjs/common';
import { MatchController } from './match/match.controller';
import { MatchService } from './services/match.service';

@Module({
  controllers: [MatchController],
  providers: [MatchService],
  exports: [MatchService],
})
export class MatchModule {}
