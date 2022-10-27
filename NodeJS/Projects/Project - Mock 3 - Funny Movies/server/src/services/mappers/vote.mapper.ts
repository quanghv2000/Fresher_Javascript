/* eslint-disable prettier/prettier */

import { Vote } from "../../entities/vote.entity";
import { VoteDTO } from "../dtos/vote.dto";


/**
 * An Vote mapper object.
 */
export class VoteMapper {
    static fromDTOtoEntity(voteDTO: VoteDTO): Vote {
        if (!voteDTO) {
            return;
        }
        const vote = new Vote();
        const fields = Object.getOwnPropertyNames(voteDTO);
        fields.forEach(field => {
            vote[field] = voteDTO[field];
        });
        return vote;
    }

    static fromEntityToDTO(vote: Vote): VoteDTO {
        if (!vote) {
            return;
        }
        const voteDTO = new VoteDTO();

        const fields = Object.getOwnPropertyNames(vote);

        fields.forEach(field => {
            voteDTO[field] = vote[field];
        });

        return voteDTO;
    }
}
