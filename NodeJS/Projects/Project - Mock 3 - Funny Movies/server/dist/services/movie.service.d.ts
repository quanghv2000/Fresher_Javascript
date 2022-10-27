import { Movie } from '../entities/movie.entity';
import { Repository } from 'typeorm';
import { MovieDTO } from './dtos/movie.dto';
export declare class MovieService {
    private movieRepository;
    constructor(movieRepository: Repository<Movie>);
    findAll(pageIndex: number, pageSize: number): Promise<any[] | undefined>;
    findById(id: number): Promise<MovieDTO | undefined>;
    findByIdToDelete(id: number): Promise<MovieDTO | undefined>;
    save(movieDTO: MovieDTO): Promise<MovieDTO | undefined>;
    update(movieDTO: MovieDTO): Promise<MovieDTO | undefined>;
    delete(movieDTO: MovieDTO): Promise<MovieDTO | undefined>;
    findMoviesShared(userId: number): Promise<MovieDTO[] | undefined>;
    findMoviesVoted(userId: number, status: string): Promise<MovieDTO[] | undefined>;
}
