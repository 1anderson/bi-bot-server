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

 csgo() {
  const Steam = require('steam'),
  steamClient = new Steam.SteamClient(),
  steamUser = new Steam.SteamUser(steamClient),
  steamGC = new Steam.SteamGameCoordinator(steamClient, 730),
  csgo = require('csgo'),
  CSGOCli = new csgo.CSGOClient(steamUser, steamGC, false);
  let decoder = new csgo.SharecodeDecoder("CSGO-4H4Xd-n4h98-JXoqH-TnPxL-zwJoD");
  steamClient.connect();
  steamClient.on('connected', function() {
    steamUser.logOn({
      account_name: '',
      password: '#',
      two_factor_code  :"",
    });
  });
  steamClient.on('logOnResponse', function(response) {
    console.log(response, Steam.EResult.OK)
    console.log("logou");
    CSGOCli.launch();

    CSGOCli.on("ready", function() {
      console.log("is Ready");
      console.log(decoder.decode())
      const d = decoder.decode();
      // CSGOCli.requestRecentGames();
      CSGOCli.requestGame(d.matchId, d.outcomeId, parseInt(d.tokenId));
    })

    CSGOCli.on("matchList",  function(data) {
      console.log("Match List");
      console.log(data)
                   if (data.matches && data.matches.length > 0) {
                        console.log("matches--------------------------------------------> ",data.matches[0].roundstatsall[data.matches[0].roundstatsall.length -1]);
                   }
    })
  }, err=>{
    console.log("err", err)
  });
 }
 
}
// steam://rungame/730/76561202255233023/+csgo_download_match%20CSGO-4H4Xd-n4h98-JXoqH-TnPxL-zwJoD
http://replay202.valve.net/730/003400827943323173032_1163731017.dem.bz2