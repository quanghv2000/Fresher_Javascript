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
exports.VoteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const vote_entity_1 = require("../entities/vote.entity");
const typeorm_2 = require("typeorm");
const vote_mapper_1 = require("./mappers/vote.mapper");
let VoteService = class VoteService {
    constructor(voteRepository) {
        this.voteRepository = voteRepository;
    }
    async findAll() {
        const votes = await this.voteRepository.find();
        const votesDTO = [];
        votes.forEach((vote) => {
            votesDTO.push(vote_mapper_1.VoteMapper.fromEntityToDTO(vote));
        });
        return votesDTO;
    }
    async findById(id) {
        if (!id) {
            return;
        }
        const vote = await this.voteRepository.findOne({
            where: {
                id: id,
            },
        });
        return vote_mapper_1.VoteMapper.fromEntityToDTO(vote);
    }
    async save(voteDTO) {
        const newVote = vote_mapper_1.VoteMapper.fromDTOtoEntity(voteDTO);
        const voteCreated = await this.voteRepository.save(newVote);
        return vote_mapper_1.VoteMapper.fromEntityToDTO(voteCreated);
    }
    async update(voteDTO) {
        const voteToUpdate = vote_mapper_1.VoteMapper.fromDTOtoEntity(voteDTO);
        const voteUpdated = await this.voteRepository.save(voteToUpdate);
        return vote_mapper_1.VoteMapper.fromEntityToDTO(voteUpdated);
    }
    async delete(voteDTO) {
        const voteToDelete = vote_mapper_1.VoteMapper.fromDTOtoEntity(voteDTO);
        const voteDeleted = await this.voteRepository.remove(voteToDelete);
        return vote_mapper_1.VoteMapper.fromEntityToDTO(voteDeleted);
    }
    async findVoteOfMovieByUser(movieId, userId) {
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
        });
        return vote_mapper_1.VoteMapper.fromEntityToDTO(voteFound);
    }
};
VoteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(vote_entity_1.Vote)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], VoteService);
exports.VoteService = VoteService;
//# sourceMappingURL=vote.service.js.map