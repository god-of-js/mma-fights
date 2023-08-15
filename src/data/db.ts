import {
  POSTGRESS_PASSWORD,
  POSTGRESS_USER,
  POSTGRES_DATABASE,
} from '@common/privateKeys'
import { Pool } from 'pg'

const pool = new Pool({
  user: POSTGRESS_USER,
  host: 'localhost',
  database: POSTGRES_DATABASE,
  password: POSTGRESS_PASSWORD,
  port: 5432, // default PostgreSQL port
})
