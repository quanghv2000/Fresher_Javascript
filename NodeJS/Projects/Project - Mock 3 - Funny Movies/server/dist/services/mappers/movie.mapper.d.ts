import { Movie } from "../../entities/movie.entity";
import { MovieDTO } from "../dtos/movie.dto";
export declare class MovieMapper {
    static fromDTOtoEntity(movieDTO: MovieDTO): Movie;
    static fromEntityToDTO(movie: Movie): MovieDTO;
}
