import { Injectable } from '@nestjs/common';

@Injectable()
export class ExtractorPlayerDataService {
  extractKill = (attacker: any, playerName: string)  => attacker && attacker.name === playerName? 1: 0;
  extractDeath = (victim: any, playerName: string)  => victim && victim.name === playerName? 1: 0;
  extractHS = (isHeadShot: boolean, attacker: any, playerName: string) => isHeadShot && attacker && attacker.name === playerName? 1: 0;
  extractMvp = (mvp: any, playerName: string)  => mvp && mvp.name === playerName? 1: 0;
  extractAssistance = (assister: any, playerName: string)  => assister && assister.name === playerName? 1: 0;
}
