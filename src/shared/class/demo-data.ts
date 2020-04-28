import { PlayerScore } from "../models/player-score";

export class DemoData {
  private playerData: PlayerScore;
  private mapData: string;

  constructor(playerData: any, mapData: string){
    this.playerData = playerData;
    this.mapData = mapData;
  }
  
  getMapName(): string {
    return this.mapData;
  }
}
