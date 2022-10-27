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
import { VoteDTO } from '../services/dtos/vote.dto';
import { VoteService } from '../services/vote.service';
import { RolesGuard } from '../security/guards/roles.guard';
import { AuthGuard } from '../security/guards/auth.guard';

@Controller('vote')
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @Roles(RoleType.ADMIN)
  @Get('/get-all-vote')
  async getAllCategories(): Promise<VoteDTO[]> {
    const votes = await this.voteService.findAll();

    return votes;
  }

  @Roles(RoleType.USER)
  @Get('/get-vote-by-id/:id')
  async getVoteById(@Param('id', ParseIntPipe) id: number): Promise<VoteDTO> {
    const voteFound = await this.voteService.findById(id);

    if (!voteFound) {
      throw new HttpException('Vote not found', HttpStatus.NOT_FOUND);
    }

    return voteFound;
  }

  @Roles(RoleType.USER)
  @UseGuards(AuthGuard, RolesGuard)
  @UsePipes(ValidationPipe)
  @Post('/create-vote')
  async createVote(
    @Req() req: Request,
    @Body() voteDTO: VoteDTO,
  ): Promise<VoteDTO> {
    const userReq: any = req.user;
    voteDTO.createdBy = userReq.email;
    const voteCreated = await this.voteService.save(voteDTO);

    return voteCreated;
  }

  @Roles(RoleType.USER)
  @UseGuards(AuthGuard, RolesGuard)
  @UsePipes(ValidationPipe)
  @Put('/update-vote')
  async updateVote(
    @Req() req: Request,
    @Body() voteDTO: VoteDTO,
  ): Promise<VoteDTO> {
    const voteFoundById = await this.voteService.findById(voteDTO.id);

    if (!voteFoundById) {
      throw new HttpException('Vote not found', HttpStatus.NOT_FOUND);
    }

    const userReq: any = req.user;
    voteDTO.createdBy = userReq.email;

    const voteUpdated = await this.voteService.update(voteDTO);

    return voteUpdated;
  }

  @Roles(RoleType.ADMIN, RoleType.USER)
  @UseGuards(AuthGuard, RolesGuard)
  @Delete('/delete-vote/:id')
  async deleteVote(@Param('id') id: number): Promise<VoteDTO> {
    const voteToDelete = await this.voteService.findById(id);

    if (!voteToDelete) {
      throw new HttpException('Vote not found', HttpStatus.NOT_FOUND);
    }

    return await this.voteService.delete(voteToDelete);
  }

  @Roles(RoleType.USER)
  @UseGuards(AuthGuard, RolesGuard)
  @UsePipes(ValidationPipe)
  @Post('/vote-movie')
  async voteMovie(
    @Req() req: Request,
    @Body() voteDTO: VoteDTO,
  ): Promise<VoteDTO> {
    if (
      voteDTO.status !== 'UNVOTE' &&
      voteDTO.status !== 'LIKE' &&
      voteDTO.status !== 'DISLIKE'
    ) {
      throw new HttpException(
        `The value of 'status' is only allowed to be: 'LIKE', 'DISLIKE', 'UNVOTE'`,
        HttpStatus.BAD_REQUEST,
      );
    }

    let voted;
    const userReq: any = req.user;
    const voteFound: VoteDTO = await this.voteService.findVoteOfMovieByUser(
      voteDTO.movie.id,
      userReq.id,
    );

    console.log(voteFound);

    if (!voteFound && voteDTO.status === 'UNVOTE') {
      return;
    }

    // Users who have not yet voted for this movie
    if (
      !voteFound &&
      (voteDTO.status === 'LIKE' || voteDTO.status === 'DISLIKE')
    ) {
      voteDTO.user = userReq;
      voted = await this.voteService.save(voteDTO);
      console.log('create vote');
    } else if (voteFound) {
      // Users want to cancel voting for this video
      if (voteDTO.status === 'UNVOTE') {
        voted = await this.voteService.delete(voteFound);
        console.log('delete vote');
        return;
      }

      // Users want to change voting status with this video
      if (voteDTO.status === 'LIKE' || 'DISLIKE') {
        voteFound.status = voteDTO.status;
        voted = await this.voteService.update(voteFound);
        console.log('update vote');
        return voted;
      }
    }

    return voted;
  }
}
