/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request } from 'express';
import { Roles } from '../security/decorators/roles.decorator';
import { RoleType } from '../security/role-type';
import { MovieDTO } from '../services/dtos/movie.dto';
import { MovieService } from '../services/movie.service';
import { RolesGuard } from '../security/guards/roles.guard';
import { AuthGuard } from '../security/guards/auth.guard';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('/get-all-movies')
  async getAllMovies(@Req() req: Request): Promise<MovieDTO[]> {
    const { pageIndex, pageSize } = req.query;
    const movies = await this.movieService.findAll(
      Number(pageIndex),
      Number(pageSize),
    );

    return movies;
  }

  @Get('/get-movie-by-id/:id')
  async getMovieById(@Param('id', ParseIntPipe) id: number): Promise<MovieDTO> {
    const movieFound = await this.movieService.findById(id);

    if (!movieFound) {
      throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
    }

    return movieFound;
  }

  @Roles(RoleType.USER)
  @UseGuards(AuthGuard, RolesGuard)
  @UsePipes(ValidationPipe)
  @Post('/create-movie')
  async createMovie(
    @Req() req: Request,
    @Body() movieDTO: MovieDTO,
  ): Promise<MovieDTO> {
    const userReq: any = req.user;
    movieDTO.createdBy = userReq.email;
    const movieCreated = await this.movieService.save(movieDTO);

    return movieCreated;
  }

  @Roles(RoleType.USER)
  @UseGuards(AuthGuard, RolesGuard)
  @UsePipes(ValidationPipe)
  @Put('/update-movie')
  async updateMovie(
    @Req() req: Request,
    @Body() movieDTO: MovieDTO,
  ): Promise<MovieDTO> {
    const movieFoundById = await this.movieService.findById(movieDTO.id);

    if (!movieFoundById) {
      throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
    }

    const userReq: any = req.user;
    movieDTO.createdBy = userReq.email;

    const movieUpdated = await this.movieService.update(movieDTO);

    return movieUpdated;
  }

  @Roles(RoleType.ADMIN, RoleType.USER)
  @UseGuards(AuthGuard, RolesGuard)
  @Delete('/delete-movie/:id')
  async deleteMovie(
    @Param('id') id: number,
    @Req() req: Request,
  ): Promise<MovieDTO> {
    const userReq: any = req.user;
    const movieToDelete = await this.movieService.findByIdToDelete(id);

    if (!movieToDelete) {
      throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
    }

    if (
      userReq.role !== 'ROLE_ADMIN' &&
      (!movieToDelete.sharedBy ||
        userReq.email !== movieToDelete.sharedBy.email)
    ) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    return await this.movieService.delete(movieToDelete);
  }

  @Roles(RoleType.USER)
  @UseGuards(AuthGuard, RolesGuard)
  @UsePipes(ValidationPipe)
  @Post('/share-movie')
  async shareMovie(
    @Req() req: Request,
    @Body() movieDTO: MovieDTO,
  ): Promise<MovieDTO> {
    const userReq: any = req.user;
    movieDTO.createdBy = userReq.email;
    movieDTO.sharedBy = userReq;
    const movieCreated = await this.movieService.save(movieDTO);

    return movieCreated;
  }

  @Roles(RoleType.USER)
  @UseGuards(AuthGuard, RolesGuard)
  @Get('/get-movies-shared')
  async getMoviesShared(@Req() req: Request): Promise<MovieDTO[]> {
    const userReq: any = req.user;
    const moviesShared = await this.movieService.findMoviesShared(userReq.id);

    return moviesShared;
  }

  @Roles(RoleType.USER)
  @UseGuards(AuthGuard, RolesGuard)
  @Get('/get-movies-voted')
  async getMoviesVoted(@Req() req: Request): Promise<MovieDTO[]> {
    const userReq: any = req.user;
    const status = String(req.query.status);
    const moviesVoted = await this.movieService.findMoviesVoted(userReq.id, status);

    return moviesVoted;
  }
}
