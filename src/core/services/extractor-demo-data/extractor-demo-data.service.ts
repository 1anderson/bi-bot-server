import { Injectable } from '@nestjs/common';

import { ExtractorPlayerDataService } from '../extractor-player-data/extractor-player-data.service';
import { PlayerScore } from 'src/shared/models/player-score';

@Injectable()
export class ExtractorDemoDataService {
  playerScore = new PlayerScore();
  constructor(private readonly playerDataExtractor: ExtractorPlayerDataService){}

  extractPlayerScore(replayData: any, demoFile: any, playerName: string) {
    const attacker = demoFile.entities.getByUserId(replayData.attacker);
    const victim = demoFile.entities.getByUserId(replayData.userid);
    const assister = demoFile.entities.getByUserId(replayData.assister);
    this.playerScore.addkill(this.playerDataExtractor.extractKill(attacker, playerName));
    this.playerScore.addDeath(this.playerDataExtractor.extractDeath(victim, playerName));
    this.playerScore.addHeadShotCount(this.playerDataExtractor.extractHS(replayData.headshot, attacker, playerName));
    this.playerScore.addAssister(this.playerDataExtractor.extractAssistance(assister, playerName));
  }

  extractMVP(replayData: any, demoFile: any, playerName: string) {
    const mvp = demoFile.entities.getByUserId(replayData.userid);
    this.playerScore.addMvp(this.playerDataExtractor.extractMvp(mvp, playerName));
  }
  
  getPlayerScore = () => this.playerScore.getScore();

}
