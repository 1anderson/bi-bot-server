import { Module } from '@nestjs/common';
import { MatchController } from './match/match.controller';

@Module({
  controllers: [MatchController]
})
export class MatchModule {}
