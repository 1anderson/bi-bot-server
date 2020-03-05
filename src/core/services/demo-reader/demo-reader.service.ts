import { Injectable } from '@nestjs/common';
import { ExtractorDemoDataService } from '../extractor-demo-data/extractor-demo-data.service';

import fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const demofile = require("demofile");

@Injectable()
export class DemoReaderService {

  constructor(readonly extractorDemoDataService: ExtractorDemoDataService){}
  matchStart = false;
  csgoMap = {};
  readDemoFile() {
    fs.readFile("./src/extractor/match730_003393402754469724304_1748830227_203.dem", (err: any, buffer: any) => {
      const demoFile = new demofile.DemoFile();
      demoFile.gameEvents.on('round_mvp', function(data: any) {
        this.extractorDemoDataService.extractMVP(data, demoFile);
      });
      demoFile.gameEvents.on("player_death", (e: any) => {
        if(this.matchStart) {
            this.extractorDemoDataService.extractPlayerScore(e, demoFile);
        }
      });
       
      demoFile.on('start', function() {
        this.csgoMap = demoFile.header.mapName
      });
       
      demoFile.gameEvents.on('round_announce_match_start', function() {
        this.matchStart = true;
      });
      demoFile.gameEvents.on('cs_win_panel_match', function(){
        //    console.log("kill--->", ExtractorService.getPlayerScore().getKills())
        //    console.log("death--->", ExtractorService.getPlayerScore().getDeaths())
        //    console.log("HS--->",ExtractorService.getPlayerScore().getHeadShotCount());
        //    console.log("mvp--->", ExtractorService.getPlayerScore().getMvp())
        //    console.log("assist--->", ExtractorService.getPlayerScore().assistance())
        //    console.log("Map", this.csgoMap);       
      });
       
      demoFile.parse(buffer);
    });
  } 
 
}
