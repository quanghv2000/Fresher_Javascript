/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vote } from '../entities/vote.entity';
import { Repository } from 'typeorm';
import { VoteDTO } from './dtos/vote.dto';
import { VoteMapper } from './mappers/vote.mapper';

@Injectable()
export class VoteService {
  constructor(
    @InjectRepository(Vote) private voteRepository: Repository<Vote>,
  ) {}

  async findAll(): Promise<VoteDTO[] | undefined> {
    const votes = await this.voteRepository.find();

    const votesDTO: VoteDTO[] = [];

    votes.forEach((vote) => {
      votesDTO.push(VoteMapper.fromEntityToDTO(vote));
    });

    return votesDTO;
  }

  async findById(id: number): Promise<VoteDTO | undefined> {
    if (!id) {
      return;
    }

    const vote = await this.voteRepository.findOne({
      where: {
        id: id,
      },
    });

    return VoteMapper.fromEntityToDTO(vote);
  }

  async save(voteDTO: VoteDTO): Promise<VoteDTO | undefined> {
    const newVote = VoteMapper.fromDTOtoEntity(voteDTO);
    const voteCreated = await this.voteRepository.save(newVote);

    return VoteMapper.fromEntityToDTO(voteCreated);
  }

  async update(voteDTO: VoteDTO): Promise<VoteDTO | undefined> {
    const voteToUpdate = VoteMapper.fromDTOtoEntity(voteDTO);
    const voteUpdated = await this.voteRepository.save(voteToUpdate);

    return VoteMapper.fromEntityToDTO(voteUpdated);
  }

  async delete(voteDTO: VoteDTO): Promise<VoteDTO | undefined> {
    const voteToDelete = VoteMapper.fromDTOtoEntity(voteDTO);
    const voteDeleted = await this.voteRepository.remove(voteToDelete);

    return VoteMapper.fromEntityToDTO(voteDeleted);
  }

  async findVoteOfMovieByUser(movieId: number, userId: number): Promise<VoteDTO | undefined> {
    if (!movieId || !userId) {
      return;
    }

    const voteFound = await this.voteRepository.findOne({
      where: {
        movie: {
          id: movieId
        },
        user: {
          id: userId
        }
      }
    })

    return VoteMapper.fromEntityToDTO(voteFound);
  }
}
