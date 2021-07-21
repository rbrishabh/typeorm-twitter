import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Tweet } from "./Tweet";

@Entity({name: 'users'})
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type: "varchar", length: 200})
    firstName: string;

    @Column({nullable: true})
    lastName: string;

    @Column()
    age: number;

    @OneToMany(type=> Tweet, tweet=>tweet.user)
    tweets: Promise<Tweet[]>    

    @Column()
    role: number;
}
