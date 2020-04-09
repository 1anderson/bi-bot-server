import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { Expose } from "class-transformer";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id?: number;
    
    @Expose({ groups: ["creation"] })
    @Column('varchar', { length: 255 })
    password: string;

    @Expose({ groups: ["creation"] })
    @Column('varchar', { length: 255 })
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
}
