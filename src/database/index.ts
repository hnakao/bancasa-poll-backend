import { join } from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';
import { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } from '@config';

const dbConnection: DataSourceOptions = {
  type: 'postgres',
  username: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: Number(DB_PORT),
  database: DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
  migrations: [join(__dirname, '../**/*.migration{.ts,.js}')],
  subscribers: [join(__dirname, '../**/*.subscriber{.ts,.js}')],
};

export const AppDataSource = new DataSource(dbConnection);
