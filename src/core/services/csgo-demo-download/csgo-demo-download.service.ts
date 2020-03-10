/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable } from '@nestjs/common';
import { MatchDTO } from 'src/core/componentes/demo/dto/match-dto';
const Steam = require('steam');
const steamClient = new Steam.SteamClient();
const steamUser = new Steam.SteamUser(steamClient);
const steamGC = new Steam.SteamGameCoordinator(steamClient, 730);
const csgo = require('csgo');
const CSGOCli = new csgo.CSGOClient(steamUser, steamGC, false);

@Injectable()
export class CsgoDemoDownloadService {
  
  regexSharedCode = /CSGO.*/;
  csgo(matchDTO: MatchDTO) {
    const decoder = new csgo.SharecodeDecoder(this.getSharedCode(matchDTO.sharedDemoLink));
    
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
      CSGOCli.launch();
      
      CSGOCli.on("ready", function() {
        console.log(decoder.decode())
        const d = decoder.decode();
        CSGOCli.requestGame(d.matchId, d.outcomeId, parseInt(d.tokenId));
      })
      
      CSGOCli.on("matchList",  function(data) {
        if (data.matches && data.matches.length > 0) {
          console.log("matches",data.matches[0].roundstatsall[data.matches[0].roundstatsall.length -1]);
        }
       })
    }, err => {
        console.log("err", err);
       }
    );
  }

  getSharedCode(sharedDemoLink: string) {
    return sharedDemoLink.match(this.regexSharedCode)[0];
  }


}
