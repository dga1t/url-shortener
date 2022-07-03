import { Link } from './src/links/link.entity';

import * as dotenv from 'dotenv';

dotenv.config({ path: './stage.dev.env'})

export default {
  name: 'seed',
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Link],
  logging: false,
  synchronize: true,
  seeds: ['src/db/seeds/*{.ts,.js}'],
  factories: ['src/db/factories/*{.ts,.js}'],
};
