import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
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

  @Column()
  weight!: number

  @Column()
  nationality!: string

  @Column()
  team!: string
}
