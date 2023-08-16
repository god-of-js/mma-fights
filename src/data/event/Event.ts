import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  title!: string

  @Column()
  location!: string

  @Column()
  date!: string

  @Column('integer', { array: true, default: [] })
  fights!: number[]

  @Column('integer', { array: true, default: [] })
  fighters!: number[]
}
