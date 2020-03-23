export class PlayerScore {
  deaths = 0;
  kills = 0;
  headShotCount = 0;
  mvp = 0;
  assister = 0;
  playerName = '';

  constructor(playerName: string) { 
    this.playerName = playerName;
  }

  addkill(killNumber: number) {
    this.kills += killNumber;
  }
  
  getKills() {
    return this.kills;
  }

  addDeath(deathNumber: number) {
    this.deaths += deathNumber;
  }

  getDeaths() {
    return this.deaths;
  }

  addHeadShotCount(headShotNumber: number) {
    this.headShotCount += headShotNumber;
  }

  getHeadShotCount() {
     return this.headShotCount;
  }

  addMvp(mvpNumber: number) {
    this.mvp += mvpNumber;
  }

  getMvp() {
    return this.mvp;
  }

  addAssister(assisterNumber: number) {
    this.assister += assisterNumber;
  }
 
  assistance() {
    return this.assister;
  }

  getScore() {
    return {
      deaths: this.deaths,
      kills: this.kills,
      headShotCount: this.headShotCount,
      mvp: this.mvp,
      assister: this.assister
    };
  }
}
