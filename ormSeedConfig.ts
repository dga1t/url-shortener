import { Link } from './src/links/link.entity';

export default {
  name: 'seed',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: [Link],
  logging: false,
  synchronize: true,
  seeds: ['src/db/seeds/*{.ts,.js}'],
  factories: ['src/db/factories/*{.ts,.js}'],
};

// host: process.env.DB_HOST,
// port: process.env.DB_PORT,
// username: process.env.DB_USERNAME,
// password: process.env.DB_PASSWORD,
// database: process.env.DB_DATABASE,