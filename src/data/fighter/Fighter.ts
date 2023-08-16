import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'fighter' })
export class Fighter {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column()
  knockouts!: string

  @Column()
  wins!: number

  @Column()
  losses!: number

  @Column()
  submissions!: number

  @Column({ type: 'float', nullable: true })
  weight!: number

  @Column()
  nationality!: string

  @Column()
  team!: string
}
