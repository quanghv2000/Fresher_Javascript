"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieMapper = void 0;
const movie_entity_1 = require("../../entities/movie.entity");
const movie_dto_1 = require("../dtos/movie.dto");
class MovieMapper {
    static fromDTOtoEntity(movieDTO) {
        if (!movieDTO) {
            return;
        }
        const movie = new movie_entity_1.Movie();
        const fields = Object.getOwnPropertyNames(movieDTO);
        fields.forEach(field => {
            movie[field] = movieDTO[field];
        });
        return movie;
    }
    static fromEntityToDTO(movie) {
        if (!movie) {
            return;
        }
        const movieDTO = new movie_dto_1.MovieDTO();
        const fields = Object.getOwnPropertyNames(movie);
        fields.forEach(field => {
            movieDTO[field] = movie[field];
        });
        return movieDTO;
    }
}
exports.MovieMapper = MovieMapper;
//# sourceMappingURL=movie.mapper.js.map