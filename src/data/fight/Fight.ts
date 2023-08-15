import { Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Fight {
  @PrimaryGeneratedColumn()
  id!: number
}
