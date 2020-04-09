import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Map {
  
  @PrimaryGeneratedColumn()
  private id?: string

  @Column()
  private name: string

}
