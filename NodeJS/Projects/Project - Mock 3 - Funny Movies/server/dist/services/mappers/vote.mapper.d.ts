import { Vote } from "../../entities/vote.entity";
import { VoteDTO } from "../dtos/vote.dto";
export declare class VoteMapper {
    static fromDTOtoEntity(voteDTO: VoteDTO): Vote;
    static fromEntityToDTO(vote: Vote): VoteDTO;
}
