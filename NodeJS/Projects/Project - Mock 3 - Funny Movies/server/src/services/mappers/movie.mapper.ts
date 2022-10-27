/* eslint-disable prettier/prettier */

import { Movie } from "../../entities/movie.entity";
import { MovieDTO } from "../dtos/movie.dto";


/**
 * An Movie mapper object.
 */
export class MovieMapper {
    static fromDTOtoEntity(movieDTO: MovieDTO): Movie {
        if (!movieDTO) {
            return;
        }
        const movie = new Movie();
        const fields = Object.getOwnPropertyNames(movieDTO);
        fields.forEach(field => {
            movie[field] = movieDTO[field];
        });
        return movie;
    }

    static fromEntityToDTO(movie: Movie): MovieDTO {
        if (!movie) {
            return;
        }
        const movieDTO = new MovieDTO();

        const fields = Object.getOwnPropertyNames(movie);

        fields.forEach(field => {
            movieDTO[field] = movie[field];
        });

        return movieDTO;
    }
}
