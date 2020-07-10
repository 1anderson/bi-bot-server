import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { User } from "./user";

@Entity()
export class Team {
    
  @PrimaryGeneratedColumn()
  private id?: number;

  @Column('varchar', { length: 30 })
  private name: string;

  @OneToMany(() => User, user => user.team)
  user: User[];
}
