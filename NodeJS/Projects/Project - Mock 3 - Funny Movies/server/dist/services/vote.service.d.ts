import { Vote } from '../entities/vote.entity';
import { Repository } from 'typeorm';
import { VoteDTO } from './dtos/vote.dto';
export declare class VoteService {
    private voteRepository;
    constructor(voteRepository: Repository<Vote>);
    findAll(): Promise<VoteDTO[] | undefined>;
    findById(id: number): Promise<VoteDTO | undefined>;
    save(voteDTO: VoteDTO): Promise<VoteDTO | undefined>;
    update(voteDTO: VoteDTO): Promise<VoteDTO | undefined>;
    delete(voteDTO: VoteDTO): Promise<VoteDTO | undefined>;
    findVoteOfMovieByUser(movieId: number, userId: number): Promise<VoteDTO | undefined>;
}
