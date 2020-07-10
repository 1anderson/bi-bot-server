import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import { Map } from "./map";
import { PlayerScore } from "./playerScore";

@Entity()
export class Match {

  @PrimaryGeneratedColumn()
  private id?: number;

  @Column()
  private date: Date;

  @ManyToOne(() => Map, map => map.match)
  map: Map;

  @OneToMany(() => PlayerScore, playerScore => playerScore.match)
  playerScore: PlayerScore[];
}
