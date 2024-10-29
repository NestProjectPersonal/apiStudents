import { User } from "src/user/entities/user.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Subscription {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    registrationdate: string

    @Column()
    period: number

    @ManyToOne(() => User,
        (user) => user.subscription,
    )
    user: User

}
