// src/data-source.ts
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { Movie } from './entities/movie.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123',
  database: 'movie_catalog',
  synchronize: false,
  logging: true,
  entities: [User, Movie],
  migrations: ['src/migrations/*.ts'],
  subscribers: [],
});
