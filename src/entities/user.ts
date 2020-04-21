import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import { Expose } from "class-transformer";
import { Team } from "./Team";
import { Match } from "./Match";
import { PlayerScore } from "./playerScore";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id?: number;
    
    @Expose({ groups: ["creation"] })
    @Column('varchar', { length: 255 })
    password: string;

    @Expose({ groups: ["creation"] })
    @Column('varchar', { length: 30 })
    login: string;

    @Column('varchar', { length: 255,unique: true } )
    email: string;
    
    @Expose({ groups: ["creation"] })
    @Column({default:false})
    activeAccount?: boolean;
    
    @Expose({ groups: ["creation"] })
    @Column('varchar', { length: 255, nullable:true })
    passwordReminderToken?: boolean;

    @Expose({ groups: ["creation"] })
    @Column('varchar', { length: 255, nullable:false })
    confirmEmailToken: string;

    @Expose({ groups: ["creation"] })
    @Column('varchar', { length: 18, nullable:false })
    steamID: string;

    @ManyToOne(() => Team, team => team.user)
    team: Team;

    @OneToMany(() => PlayerScore, playerScore => playerScore.user)
    playerScore: PlayerScore[];
}
