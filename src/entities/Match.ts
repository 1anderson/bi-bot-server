import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Match {

  @PrimaryGeneratedColumn()
  private id?: number;

  @Column()
  private date: Date;
  
}
