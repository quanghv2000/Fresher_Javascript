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
exports.VoteController = void 0;
const common_1 = require("@nestjs/common");
const roles_decorator_1 = require("../security/decorators/roles.decorator");
const role_type_1 = require("../security/role-type");
const vote_dto_1 = require("../services/dtos/vote.dto");
const vote_service_1 = require("../services/vote.service");
const roles_guard_1 = require("../security/guards/roles.guard");
const auth_guard_1 = require("../security/guards/auth.guard");
let VoteController = class VoteController {
    constructor(voteService) {
        this.voteService = voteService;
    }
    async getAllCategories() {
        const votes = await this.voteService.findAll();
        return votes;
    }
    async getVoteById(id) {
        const voteFound = await this.voteService.findById(id);
        if (!voteFound) {
            throw new common_1.HttpException('Vote not found', common_1.HttpStatus.NOT_FOUND);
        }
        return voteFound;
    }
    async createVote(req, voteDTO) {
        const userReq = req.user;
        voteDTO.createdBy = userReq.email;
        const voteCreated = await this.voteService.save(voteDTO);
        return voteCreated;
    }
    async updateVote(req, voteDTO) {
        const voteFoundById = await this.voteService.findById(voteDTO.id);
        if (!voteFoundById) {
            throw new common_1.HttpException('Vote not found', common_1.HttpStatus.NOT_FOUND);
        }
        const userReq = req.user;
        voteDTO.createdBy = userReq.email;
        const voteUpdated = await this.voteService.update(voteDTO);
        return voteUpdated;
    }
    async deleteVote(id) {
        const voteToDelete = await this.voteService.findById(id);
        if (!voteToDelete) {
            throw new common_1.HttpException('Vote not found', common_1.HttpStatus.NOT_FOUND);
        }
        return await this.voteService.delete(voteToDelete);
    }
    async voteMovie(req, voteDTO) {
        if (voteDTO.status !== 'UNVOTE' &&
            voteDTO.status !== 'LIKE' &&
            voteDTO.status !== 'DISLIKE') {
            throw new common_1.HttpException(`The value of 'status' is only allowed to be: 'LIKE', 'DISLIKE', 'UNVOTE'`, common_1.HttpStatus.BAD_REQUEST);
        }
        let voted;
        const userReq = req.user;
        const voteFound = await this.voteService.findVoteOfMovieByUser(voteDTO.movie.id, userReq.id);
        console.log(voteFound);
        if (!voteFound && voteDTO.status === 'UNVOTE') {
            return;
        }
        if (!voteFound &&
            (voteDTO.status === 'LIKE' || voteDTO.status === 'DISLIKE')) {
            voteDTO.user = userReq;
            voted = await this.voteService.save(voteDTO);
            console.log('create vote');
        }
        else if (voteFound) {
            if (voteDTO.status === 'UNVOTE') {
                voted = await this.voteService.delete(voteFound);
                console.log('delete vote');
                return;
            }
            if (voteDTO.status === 'LIKE' || 'DISLIKE') {
                voteFound.status = voteDTO.status;
                voted = await this.voteService.update(voteFound);
                console.log('update vote');
                return voted;
            }
        }
        return voted;
    }
};
__decorate([
    (0, roles_decorator_1.Roles)(role_type_1.RoleType.ADMIN),
    (0, common_1.Get)('/get-all-vote'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VoteController.prototype, "getAllCategories", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_type_1.RoleType.USER),
    (0, common_1.Get)('/get-vote-by-id/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VoteController.prototype, "getVoteById", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_type_1.RoleType.USER),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Post)('/create-vote'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, vote_dto_1.VoteDTO]),
    __metadata("design:returntype", Promise)
], VoteController.prototype, "createVote", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_type_1.RoleType.USER),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Put)('/update-vote'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, vote_dto_1.VoteDTO]),
    __metadata("design:returntype", Promise)
], VoteController.prototype, "updateVote", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_type_1.RoleType.ADMIN, role_type_1.RoleType.USER),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Delete)('/delete-vote/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VoteController.prototype, "deleteVote", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_type_1.RoleType.USER),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Post)('/vote-movie'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, vote_dto_1.VoteDTO]),
    __metadata("design:returntype", Promise)
], VoteController.prototype, "voteMovie", null);
VoteController = __decorate([
    (0, common_1.Controller)('vote'),
    __metadata("design:paramtypes", [vote_service_1.VoteService])
], VoteController);
exports.VoteController = VoteController;
//# sourceMappingURL=vote.controller.js.map