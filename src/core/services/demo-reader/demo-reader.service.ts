import { Injectable } from '@nestjs/common';
import { ExtractorDemoDataService } from '../extractor-demo-data/extractor-demo-data.service';

import fs = require('fs-extra');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const demofile = require("demofile");

@Injectable()
export class DemoReaderService {

  constructor(private readonly extractorDemoDataService: ExtractorDemoDataService){}
  
  matchStart = false;
  csgoMap = {};
  async readDemo(demoPath: string) {
    return new Promise(async ( resolve, reject ) => {
      try {
        const buffer = await fs.readFile(demoPath);
        
        const demoFile = new demofile.DemoFile();
        
        demoFile.on("start", () => {
          console.log("Demo header:", demoFile.header);
          console.log("Tick rate:", demoFile.tickRate);
      
          // Stop parsing - we're finished
          demoFile.cancel();
        });
        demoFile.gameEvents.on('round_mvp', (data: any) => {
          this.extractorDemoDataService.extractMVP(data, demoFile);
        });
        
        demoFile.gameEvents.on("player_death", (e: any) => {
          if(this.matchStart) {
              this.extractorDemoDataService.extractPlayerScore(e, demoFile);
          }
        });
         
        demoFile.on('start', () => {
          this.csgoMap = demoFile.header.mapName
        });
         
        demoFile.gameEvents.on('round_announce_match_start', () => {
          this.matchStart = true;
        });
        
        demoFile.gameEvents.on('cs_win_panel_match', () =>{
             console.log("kill--->", this.extractorDemoDataService.getPlayerScore().getKills())
             console.log("death--->", this.extractorDemoDataService.getPlayerScore().getDeaths())
             console.log("HS--->",this.extractorDemoDataService.getPlayerScore().getHeadShotCount());
             console.log("mvp--->", this.extractorDemoDataService.getPlayerScore().getMvp())
             console.log("assist--->", this.extractorDemoDataService.getPlayerScore().assistance())
             console.log("Map", this.csgoMap);  
             resolve(this.extractorDemoDataService.getPlayerScore());     
        });
         
        demoFile.parse(buffer);
      } catch (error) {
        throw new Error(error);
      }
    })
  } 

}
