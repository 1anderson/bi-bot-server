import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user";
import { Match } from "./Match";

@Entity()
export class PlayerScore {

  @PrimaryGeneratedColumn()
  id?: number;
  
  @Column()
  kill: number;
  
  @Column()
  death: number;
  
  @Column()
  hs: number;
  
  @Column()
  mvp: number;
  
  @Column()
  assist: number;

  @ManyToOne(() => User, user => user.playerScore)
  user: User;

  @ManyToOne(() => Match, match => match.playerScore)
  match: Match;

}
