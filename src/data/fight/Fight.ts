import { Event } from '@data/event/Event'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Fight {
  @PrimaryGeneratedColumn()
  id!: number

  @ManyToOne(() => Event, (ev) => ev.fights)
  event!: number

  // TODO: Investigate how to populate this field directly with one database read without using .find
  @Column('integer', { array: true, default: [] })
  fighters!: number[]
}
