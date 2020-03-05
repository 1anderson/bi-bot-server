import { Injectable } from '@nestjs/common';

@Injectable()
export class ExtractorPlayerDataService {
  extractKill = (attacker: any)  => attacker && attacker.name === 'ΔĐS'? 1: 0;
  extractDeath = (victim: any)  => victim && victim.name === 'ΔĐS'? 1: 0;
  extractHS = (isHeadShot: boolean, attacker: any) => isHeadShot && attacker && attacker.name === "ΔĐS"? 1: 0;
  extractMvp = (mvp: any)  => mvp && mvp.name === 'ΔĐS'? 1: 0;
  extractAssistance = (assister: any)  => assister && assister.name === 'ΔĐS'? 1: 0;
}
