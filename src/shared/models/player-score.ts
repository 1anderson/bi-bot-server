export class PlayerScore {
  deaths = 0;
  kils = 0;
  headShotCount = 0;
  mvp = 0;
  assister = 0;

  addkill(killNumber: number) {
    this.kils += killNumber;
  }

  getKills() {
    return this.kils;
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

}
