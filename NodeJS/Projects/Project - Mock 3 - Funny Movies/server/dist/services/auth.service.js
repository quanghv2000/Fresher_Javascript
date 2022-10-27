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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const cache_manager_1 = require("cache-manager");
let AuthService = class AuthService {
    constructor(jwtService, userService, cacheManager) {
        this.jwtService = jwtService;
        this.userService = userService;
        this.cacheManager = cacheManager;
    }
    async registerNewUser(newUser) {
        newUser.role = 'ROLE_USER';
        const user = await this.userService.save(newUser);
        return user;
    }
    async login(userLogin) {
        const loginEmail = userLogin.email;
        const loginPassword = userLogin.password;
        const userFind = await this.userService.findByEmail(loginEmail);
        const validPassword = userFind && (await bcrypt.compare(loginPassword, userFind.password));
        if (!userFind || !validPassword) {
            throw new common_1.HttpException('Invalid login name or password!', common_1.HttpStatus.BAD_REQUEST);
        }
        const payload = { id: userFind.id, email: userFind.email, role: userFind.role };
        const access_token = this.jwtService.sign(payload, {
            secret: 'SECRET_KEY',
            expiresIn: '3h',
        });
        const refresh_token = this.jwtService.sign(payload, {
            secret: 'SECRET_KEY',
            expiresIn: 60 * 60 * 24 * 30 * 6,
        });
        await this.cacheManager.set(`refresh_token_${userFind.id}`, refresh_token, { ttl: 60 * 60 * 24 * 30 * 6 });
        return {
            access_token,
            refresh_token,
        };
    }
    async validateUser(payload) {
        return await this.findUserWithAuthById(payload.id);
    }
    async findUserWithAuthById(userId) {
        const userDTO = await this.userService.findById(userId);
        return userDTO;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)(common_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        user_service_1.UserService, typeof (_a = typeof cache_manager_1.Cache !== "undefined" && cache_manager_1.Cache) === "function" ? _a : Object])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map