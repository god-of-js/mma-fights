import { Fighter } from '@data/fighter/Fighter'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'event' })
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

  // TODO: Investigate how to populate this field directly with one database read without using .find
  @Column('integer', { array: true, default: [] })
  fighters!: number[]
}
