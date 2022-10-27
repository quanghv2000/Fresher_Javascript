import { AuthService } from '../services/auth.service';
import { UserLoginDTO } from '../services/dtos/user-login.dto';
import { Cache } from 'cache-manager';
import { Response, Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { UserRegisterDTO } from 'src/services/dtos/user-register.dto';
export declare class AuthController {
    private readonly authService;
    private cacheManager;
    private readonly jwtService;
    constructor(authService: AuthService, cacheManager: Cache, jwtService: JwtService);
    registerAccount(req: Request, userRegisterDTO: UserRegisterDTO): Promise<any>;
    authorize(userLogin: UserLoginDTO): Promise<any>;
    refreshToken(req: Request, res: Response): Promise<any>;
    logout(req: Request, res: Response): Promise<any>;
}
