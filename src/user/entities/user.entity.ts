
import { Registration } from "src/registration/entities/registration.entity";
import { BeforeInsert, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    profession: string

    @Column()
    totalcredit?: number


    @BeforeInsert()
    totalcreditc() {
        const totalcredit = process.env.TOTALCREDIT
        //parseFloat(process.env.TOTALCREDIT)
    }


    @OneToMany(
        () => Registration,
        (registration) => registration.user
    )
    registration: Registration

}
