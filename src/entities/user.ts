import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 30 })
    name: string;

    @Column('varchar', { length: 255 })
    password: string;

    @Column('varchar', { length: 255 })
    email: string;

    @Column()
    activeAccount: boolean;

    @Column('varchar', { length: 255, nullable:true })
    passwordReminderToken?: boolean;

}
