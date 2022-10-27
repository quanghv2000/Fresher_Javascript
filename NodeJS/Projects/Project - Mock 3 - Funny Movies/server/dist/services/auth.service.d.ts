import { UserLoginDTO } from "./dtos/user-login.dto";
import { UserService } from "./user.service";
import { Payload } from "../security/payload.interface";
import { JwtService } from '@nestjs/jwt';
import { Cache } from 'cache-manager';
import { UserRegisterDTO } from "./dtos/user-register.dto";
import { UserDTO } from "./dtos/user.dto";
export declare class AuthService {
    private readonly jwtService;
    private userService;
    private cacheManager;
    constructor(jwtService: JwtService, userService: UserService, cacheManager: Cache);
    registerNewUser(newUser: UserRegisterDTO): Promise<UserDTO>;
    login(userLogin: UserLoginDTO): Promise<any>;
    validateUser(payload: Payload): Promise<UserDTO | undefined>;
    findUserWithAuthById(userId: number): Promise<UserDTO | undefined>;
}
