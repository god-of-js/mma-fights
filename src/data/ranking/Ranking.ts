import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Ranking {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  title!: string

  @Column()
  location!: string

  @Column()
  date!: string

  @Column('integer', { array: true, default: [], nullable: true })
  fights!: number[]

  @Column('integer', { array: true, default: [], nullable: true })
  fighters!: number[]
}
