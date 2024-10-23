import { Subscription } from "src/subscriptions/entities/subscription.entity";
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
        () => Subscription,
        (subscription) => subscription.user
    )
    subscription: Subscription
    

}
