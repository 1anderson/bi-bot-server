import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Map {
  
  @PrimaryGeneratedColumn()
  private id?: number;

  @Column()
  private name: string;

}
