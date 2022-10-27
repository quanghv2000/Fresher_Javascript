"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const movie_entity_1 = require("../entities/movie.entity");
const typeorm_2 = require("typeorm");
const movie_mapper_1 = require("./mappers/movie.mapper");
const vote_entity_1 = require("../entities/vote.entity");
let MovieService = class MovieService {
    constructor(movieRepository) {
        this.movieRepository = movieRepository;
    }
    async findAll(pageIndex, pageSize) {
        const skip = (pageIndex - 1) * pageSize;
        const movies = await this.movieRepository
            .createQueryBuilder('movie')
            .select('movie.id, movie.title, movie.description, movie.createdBy, movie.createdDate')
            .addSelect(`COUNT(case vote."status" when 'LIKE' then 1 else null end)`, 'totalLike')
            .addSelect(`COUNT(case vote."status" when 'DISLIKE' then 1 else null end)`, 'totalDisLike')
            .innerJoin(vote_entity_1.Vote, 'vote', 'movie.id = vote.movieId')
            .groupBy('movie.id')
            .limit(pageSize)
            .offset(skip)
            .getRawMany();
        return movies;
    }
    async findById(id) {
        if (!id) {
            return;
        }
        const movie = await this.movieRepository.findOne({
            where: {
                id: id,
            },
        });
        return movie_mapper_1.MovieMapper.fromEntityToDTO(movie);
    }
    async findByIdToDelete(id) {
        if (!id) {
            return;
        }
        const movie = await this.movieRepository.findOne({
            where: {
                id: id,
            },
            relations: ['sharedBy'],
        });
        return movie_mapper_1.MovieMapper.fromEntityToDTO(movie);
    }
    async save(movieDTO) {
        const newMovie = movie_mapper_1.MovieMapper.fromDTOtoEntity(movieDTO);
        const movieCreated = await this.movieRepository.save(newMovie);
        return movie_mapper_1.MovieMapper.fromEntityToDTO(movieCreated);
    }
    async update(movieDTO) {
        const movieToUpdate = movie_mapper_1.MovieMapper.fromDTOtoEntity(movieDTO);
        const movieUpdated = await this.movieRepository.save(movieToUpdate);
        return movie_mapper_1.MovieMapper.fromEntityToDTO(movieUpdated);
    }
    async delete(movieDTO) {
        const movieToDelete = movie_mapper_1.MovieMapper.fromDTOtoEntity(movieDTO);
        const movieDeleted = await this.movieRepository.remove(movieToDelete);
        return movie_mapper_1.MovieMapper.fromEntityToDTO(movieDeleted);
    }
    async findMoviesShared(userId) {
        if (!userId) {
            return [];
        }
        const moviesShared = await this.movieRepository
            .createQueryBuilder('movie')
            .select('movie.id, movie.title, movie.description, movie.createdBy, movie.createdDate')
            .addSelect(`COUNT(case vote."status" when 'LIKE' then 1 else null end)`, 'totalLike')
            .addSelect(`COUNT(case vote."status" when 'DISLIKE' then 1 else null end)`, 'totalDisLike')
            .innerJoin(vote_entity_1.Vote, 'vote', 'movie.id = vote.movieId')
            .where(`movie."sharedById" = ${userId}`)
            .groupBy('movie.id')
            .getRawMany();
        return moviesShared;
    }
    async findMoviesVoted(userId, status) {
        const moviesVoted = await this.movieRepository
            .createQueryBuilder('movie')
            .select('movie.id, movie.title, movie.description, movie.createdBy, movie.createdDate')
            .addSelect(`COUNT(case vote."status" when 'LIKE' then 1 else null end)`, 'totalLike')
            .addSelect(`COUNT(case vote."status" when 'DISLIKE' then 1 else null end)`, 'totalDisLike')
            .innerJoin(vote_entity_1.Vote, 'vote', 'movie.id = vote.movieId')
            .where(`movie.id in (SELECT vote."movieId" from vote where vote."userId" = ${userId} and status = '${status}')`)
            .groupBy('movie.id')
            .getRawMany();
        return moviesVoted;
    }
};
MovieService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(movie_entity_1.Movie)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map