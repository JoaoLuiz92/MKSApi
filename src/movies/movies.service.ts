// src/movies/movies.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Repository } from 'typeorm';
import { Movie } from '../entities/movie.entity';
import { CreateMovieDto } from '../dto/movie.dto';
import { UpdateMovieDto } from '../dto/movie.dto';
import { Cache } from 'cache-manager';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const movie = this.moviesRepository.create(createMovieDto);
    await this.cacheManager.del('movies'); 
    return this.moviesRepository.save(movie);
  }

  async findAll(): Promise<Movie[]> {
    const cachedMovies = await this.cacheManager.get<Movie[]>('movies');
    if (cachedMovies) {
      return cachedMovies;
    }

    const movies = await this.moviesRepository.find();
    await this.cacheManager.set('movies', movies);
    return movies;
  }

  async findOne(id: number): Promise<Movie> {
    const movie = await this.moviesRepository.findOne({ where: { id } });
    if (!movie) {
      throw new Error('Movie not found');
    }
    return movie;
  }

  async update(id: number, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    const movie = await this.findOne(id);
    this.moviesRepository.merge(movie, updateMovieDto);
    await this.cacheManager.del('movies');
    return this.moviesRepository.save(movie);
  }

  async remove(id: number): Promise<void> {
    await this.moviesRepository.delete(id);
    await this.cacheManager.del('movies');
  }
}
