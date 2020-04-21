import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Match } from "./Match";

@Entity()
export class Map {
  
  @PrimaryGeneratedColumn()
  private id?: number;

  @Column()
  private name: string;

  @OneToMany(()=> Match, match => match.map)
  match: Match[];
}
