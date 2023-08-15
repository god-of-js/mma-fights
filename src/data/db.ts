import { DataSource } from 'typeorm'
import {
  POSTGRESS_PASSWORD,
  POSTGRESS_USER,
  POSTGRES_DATABASE,
} from '@common/privateKeys'
import { Fight } from './fight/Fight'
import { Fighter } from './fighter/Fighter'
import { Ranking } from './ranking/Ranking'
import { Event } from './event/Event'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: POSTGRESS_USER,
  password: POSTGRESS_PASSWORD,
  database: POSTGRES_DATABASE,
  entities: [Fight, Fighter, Ranking, Event],
  synchronize: true,
})

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err)
  })
