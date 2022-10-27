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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../services/auth.service");
const user_login_dto_1 = require("../services/dtos/user-login.dto");
const cache_manager_1 = require("cache-manager");
const jwt_1 = require("@nestjs/jwt");
const user_register_dto_1 = require("../services/dtos/user-register.dto");
const roles_guard_1 = require("../security/guards/roles.guard");
const auth_guard_1 = require("../security/guards/auth.guard");
const roles_decorator_1 = require("../security/decorators/roles.decorator");
const role_type_1 = require("../security/role-type");
let AuthController = class AuthController {
    constructor(authService, cacheManager, jwtService) {
        this.authService = authService;
        this.cacheManager = cacheManager;
        this.jwtService = jwtService;
    }
    async registerAccount(req, userRegisterDTO) {
        return await this.authService.registerNewUser(userRegisterDTO);
    }
    async authorize(userLogin) {
        return await this.authService.login(userLogin);
    }
    async refreshToken(req, res) {
        const refreshTokenReq = req.headers.authorization.split(' ')[1];
        let user;
        try {
            user = await this.jwtService.verify(refreshTokenReq);
        }
        catch (error) {
            throw new common_1.HttpException('Invalid refresh token!', common_1.HttpStatus.BAD_REQUEST);
        }
        const payload = {
            id: user.id,
            email: user.email,
            role: user.role,
        };
        const refreshTokenFound = await this.cacheManager.get(`refresh_token_${user.id}`);
        if (!refreshTokenFound || refreshTokenReq !== refreshTokenFound) {
            throw new common_1.HttpException('Invalid refresh token!', common_1.HttpStatus.BAD_REQUEST);
        }
        const access_token = this.jwtService.sign(payload, {
            secret: 'SECRET_KEY',
            expiresIn: '3h',
        });
        return res.json({ access_token });
    }
    async logout(req, res) {
        const userReq = req.user;
        await this.cacheManager.del(`refresh_token_${userReq.id}`);
        return res.json({
            message: 'Logout successfully!',
        });
    }
};
__decorate([
    (0, common_1.Post)('/register'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_register_dto_1.UserRegisterDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registerAccount", null);
__decorate([
    (0, common_1.Post)('/login'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_login_dto_1.UserLoginDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "authorize", null);
__decorate([
    (0, common_1.Post)('/refresh-token'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshToken", null);
__decorate([
    (0, common_1.Post)('/logout'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_type_1.RoleType.ADMIN, role_type_1.RoleType.USER),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __param(1, (0, common_1.Inject)(common_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [auth_service_1.AuthService, typeof (_a = typeof cache_manager_1.Cache !== "undefined" && cache_manager_1.Cache) === "function" ? _a : Object, jwt_1.JwtService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map