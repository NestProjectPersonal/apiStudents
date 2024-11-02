import { User } from "src/user/entities/user.entity"
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Subscription {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    courseId: string;
    
    @Column()
    userId: string;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    registrationdate: Date

    @Column()
    period: number

    @ManyToOne(() => User,
        (user) => user.subscription,
    )
    user: User



}
