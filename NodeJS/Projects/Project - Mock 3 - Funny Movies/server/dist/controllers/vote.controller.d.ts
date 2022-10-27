import { Request } from 'express';
import { VoteDTO } from '../services/dtos/vote.dto';
import { VoteService } from '../services/vote.service';
export declare class VoteController {
    private readonly voteService;
    constructor(voteService: VoteService);
    getAllCategories(): Promise<VoteDTO[]>;
    getVoteById(id: number): Promise<VoteDTO>;
    createVote(req: Request, voteDTO: VoteDTO): Promise<VoteDTO>;
    updateVote(req: Request, voteDTO: VoteDTO): Promise<VoteDTO>;
    deleteVote(id: number): Promise<VoteDTO>;
    voteMovie(req: Request, voteDTO: VoteDTO): Promise<VoteDTO>;
}
