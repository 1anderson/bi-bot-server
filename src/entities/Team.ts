import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Team {
    
  @PrimaryGeneratedColumn()
  private id?: number;

  @Column()
  private name: string;
  
}
