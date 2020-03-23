import { Injectable } from '@nestjs/common';
import { ExtractorDemoDataService } from '../extractor-demo-data/extractor-demo-data.service';

import fs = require('fs-extra');
import { DemoData } from 'src/shared/class/demo-data';
import { PlayerScore } from 'src/shared/models/player-score';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const demofile = require("demofile");

@Injectable()
export class DemoReaderService {

  constructor(private readonly extractorDemoDataService: ExtractorDemoDataService){}

  matchStart = false;
  async readDemo(demoPath: string) {
    const playerScore = new PlayerScore('');

    const buffer = await fs.readFile(demoPath);
    return new Promise(( resolve, reject ) => {
      const demoFile = new demofile.DemoFile();
      demoFile.parse(buffer);
      
      demoFile.gameEvents.on('round_mvp', (data: any) => {
          this.extractorDemoDataService.extractMVP(data, demoFile);
      });
        
      demoFile.gameEvents.on("player_death", (e: any) => {
        if(this.matchStart) {
            this.extractorDemoDataService.extractPlayerScore(e, demoFile, '');
        }
      });
         
      demoFile.gameEvents.on('round_announce_match_start', () => {
        console.log("round_announce_match_start")
        this.matchStart = true;
      });
        
      demoFile.gameEvents.on('cs_win_panel_match', () => {
        console.log("cs_win_panel_match")
        console.log(this.extractorDemoDataService.getPlayerScore(), demoFile.header.mapName)
        resolve(new DemoData(this.extractorDemoDataService.getPlayerScore(), demoFile.header.mapName));     
      });
         
     })
  } 

}
