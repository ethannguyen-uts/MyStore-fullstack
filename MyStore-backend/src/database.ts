import pg, { Pool, types } from 'pg';
import dotenv from 'dotenv';

pg.defaults.parseInt8 = true;
//Return numeric as float
types.setTypeParser(1700, function (val) {
  return parseFloat(val);
});

dotenv.config();
const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_TEST_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  ENV,
} = process.env;

console.log(ENV);
const client = new Pool({
  host: POSTGRES_HOST,
  database: ENV == 'test' ? POSTGRES_TEST_DB : POSTGRES_DB,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
});

export default client;
