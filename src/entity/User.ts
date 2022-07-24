import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { IsEmail,  Length, MinLength } from "class-validator";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @Length(3, 10)
    name: string

    @Column()
    @IsEmail()
    email: string

    @Column()
    @MinLength(20)
    password: string

}
