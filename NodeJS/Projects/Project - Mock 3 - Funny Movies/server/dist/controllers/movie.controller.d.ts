import { Request } from 'express';
import { MovieDTO } from '../services/dtos/movie.dto';
import { MovieService } from '../services/movie.service';
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    getAllMovies(req: Request): Promise<MovieDTO[]>;
    getMovieById(id: number): Promise<MovieDTO>;
    createMovie(req: Request, movieDTO: MovieDTO): Promise<MovieDTO>;
    updateMovie(req: Request, movieDTO: MovieDTO): Promise<MovieDTO>;
    deleteMovie(id: number, req: Request): Promise<MovieDTO>;
    shareMovie(req: Request, movieDTO: MovieDTO): Promise<MovieDTO>;
    getMoviesShared(req: Request): Promise<MovieDTO[]>;
    getMoviesVoted(req: Request): Promise<MovieDTO[]>;
}
