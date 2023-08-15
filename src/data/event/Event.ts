import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  title!: string

  @Column('integer', { array: true, default: [], nullable: true })
  fights!: number[]
}
