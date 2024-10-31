import { Subscription } from "src/subscriptions/entities/subscription.entity";
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";



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
    creditsUser: number
    
    @OneToMany(
        () => Subscription,
        (subscription) => subscription.user
    )
    subscription: Subscription
    

}
