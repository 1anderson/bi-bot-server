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
  async readDemo(fileBuffer: Buffer) {
    
    try {
      await fs.appendFile('demo.dem', fileBuffer);
      const buffer = await fs.readFile('demo.dem');
      
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
      });
       
      demoFile.parse(buffer);
    } catch (error) {
      throw error;
    }
 } 

}
// steam://rungame/730/76561202255233023/+csgo_download_match%20CSGO-4H4Xd-n4h98-JXoqH-TnPxL-zwJoD
// http://replay202.valve.net/730/003400827943323173032_1163731017.dem.bz2