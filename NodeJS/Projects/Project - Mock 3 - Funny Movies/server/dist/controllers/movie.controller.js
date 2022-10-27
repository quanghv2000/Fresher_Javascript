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
exports.MovieController = void 0;
const common_1 = require("@nestjs/common");
const roles_decorator_1 = require("../security/decorators/roles.decorator");
const role_type_1 = require("../security/role-type");
const movie_dto_1 = require("../services/dtos/movie.dto");
const movie_service_1 = require("../services/movie.service");
const roles_guard_1 = require("../security/guards/roles.guard");
const auth_guard_1 = require("../security/guards/auth.guard");
let MovieController = class MovieController {
    constructor(movieService) {
        this.movieService = movieService;
    }
    async getAllMovies(req) {
        const { pageIndex, pageSize } = req.query;
        const movies = await this.movieService.findAll(Number(pageIndex), Number(pageSize));
        return movies;
    }
    async getMovieById(id) {
        const movieFound = await this.movieService.findById(id);
        if (!movieFound) {
            throw new common_1.HttpException('Movie not found', common_1.HttpStatus.NOT_FOUND);
        }
        return movieFound;
    }
    async createMovie(req, movieDTO) {
        const userReq = req.user;
        movieDTO.createdBy = userReq.email;
        const movieCreated = await this.movieService.save(movieDTO);
        return movieCreated;
    }
    async updateMovie(req, movieDTO) {
        const movieFoundById = await this.movieService.findById(movieDTO.id);
        if (!movieFoundById) {
            throw new common_1.HttpException('Movie not found', common_1.HttpStatus.NOT_FOUND);
        }
        const userReq = req.user;
        movieDTO.createdBy = userReq.email;
        const movieUpdated = await this.movieService.update(movieDTO);
        return movieUpdated;
    }
    async deleteMovie(id, req) {
        const userReq = req.user;
        const movieToDelete = await this.movieService.findByIdToDelete(id);
        if (!movieToDelete) {
            throw new common_1.HttpException('Movie not found', common_1.HttpStatus.NOT_FOUND);
        }
        if (userReq.role !== 'ROLE_ADMIN' &&
            (!movieToDelete.sharedBy ||
                userReq.email !== movieToDelete.sharedBy.email)) {
            throw new common_1.HttpException('Forbidden', common_1.HttpStatus.FORBIDDEN);
        }
        return await this.movieService.delete(movieToDelete);
    }
    async shareMovie(req, movieDTO) {
        const userReq = req.user;
        movieDTO.createdBy = userReq.email;
        movieDTO.sharedBy = userReq;
        const movieCreated = await this.movieService.save(movieDTO);
        return movieCreated;
    }
    async getMoviesShared(req) {
        const userReq = req.user;
        const moviesShared = await this.movieService.findMoviesShared(userReq.id);
        return moviesShared;
    }
    async getMoviesVoted(req) {
        const userReq = req.user;
        const status = String(req.query.status);
        const moviesVoted = await this.movieService.findMoviesVoted(userReq.id, status);
        return moviesVoted;
    }
};
__decorate([
    (0, common_1.Get)('/get-all-movies'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "getAllMovies", null);
__decorate([
    (0, common_1.Get)('/get-movie-by-id/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "getMovieById", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_type_1.RoleType.USER),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Post)('/create-movie'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, movie_dto_1.MovieDTO]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "createMovie", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_type_1.RoleType.USER),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Put)('/update-movie'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, movie_dto_1.MovieDTO]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "updateMovie", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_type_1.RoleType.ADMIN, role_type_1.RoleType.USER),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Delete)('/delete-movie/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "deleteMovie", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_type_1.RoleType.USER),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Post)('/share-movie'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, movie_dto_1.MovieDTO]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "shareMovie", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_type_1.RoleType.USER),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)('/get-movies-shared'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "getMoviesShared", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_type_1.RoleType.USER),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)('/get-movies-voted'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "getMoviesVoted", null);
MovieController = __decorate([
    (0, common_1.Controller)('movie'),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], MovieController);
exports.MovieController = MovieController;
//# sourceMappingURL=movie.controller.js.map