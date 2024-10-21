import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Registration {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    year: number

    @Column()
    periodacademic: number

    @ManyToOne(() => User,
        user => user.registration,
        { cascade: true }
    )
    user: User

}
