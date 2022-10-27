"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteMapper = void 0;
const vote_entity_1 = require("../../entities/vote.entity");
const vote_dto_1 = require("../dtos/vote.dto");
class VoteMapper {
    static fromDTOtoEntity(voteDTO) {
        if (!voteDTO) {
            return;
        }
        const vote = new vote_entity_1.Vote();
        const fields = Object.getOwnPropertyNames(voteDTO);
        fields.forEach(field => {
            vote[field] = voteDTO[field];
        });
        return vote;
    }
    static fromEntityToDTO(vote) {
        if (!vote) {
            return;
        }
        const voteDTO = new vote_dto_1.VoteDTO();
        const fields = Object.getOwnPropertyNames(vote);
        fields.forEach(field => {
            voteDTO[field] = vote[field];
        });
        return voteDTO;
    }
}
exports.VoteMapper = VoteMapper;
//# sourceMappingURL=vote.mapper.js.map