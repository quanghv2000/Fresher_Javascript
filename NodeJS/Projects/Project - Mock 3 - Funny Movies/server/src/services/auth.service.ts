/* eslint-disable prettier/prettier */
import { CACHE_MANAGER, HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { UserLoginDTO } from "./dtos/user-login.dto";
import { UserService } from "./user.service";
import * as bcrypt from 'bcrypt';
import { Payload } from "../security/payload.interface";
import { JwtService } from '@nestjs/jwt';
import { Cache } from 'cache-manager';
import { UserRegisterDTO } from "./dtos/user-register.dto";
import { UserDTO } from "./dtos/user.dto";

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private userService: UserService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
    ) {}
    
    async registerNewUser(newUser: UserRegisterDTO): Promise<UserDTO> {
        newUser.role = 'ROLE_USER';
        const user: UserDTO = await this.userService.save(newUser);
        return user;
    }

    async login(userLogin: UserLoginDTO): Promise<any> {
        const loginEmail = userLogin.email;
        const loginPassword = userLogin.password;

        const userFind = await this.userService.findByEmail(loginEmail);

        const validPassword = userFind && (await bcrypt.compare(loginPassword, userFind.password));
        if (!userFind || !validPassword) {
            throw new HttpException('Invalid login name or password!', HttpStatus.BAD_REQUEST);
        }

        const payload: Payload = { id: userFind.id, email: userFind.email, role: userFind.role };

        const access_token = this.jwtService.sign(payload, {
            secret: 'SECRET_KEY',
            expiresIn: '3h',
        });
        const refresh_token = this.jwtService.sign(payload, {
            secret: 'SECRET_KEY',
            expiresIn: 60 * 60 * 24 * 30 * 6, // 6 month
        });

        await this.cacheManager.set(`refresh_token_${userFind.id}`, refresh_token, { ttl: 60 * 60 * 24 * 30 * 6 });

        return {
            access_token,
            refresh_token,
        };
    }

    async validateUser(payload: Payload): Promise<UserDTO | undefined> {
        return await this.findUserWithAuthById(payload.id);
    }

    async findUserWithAuthById(userId: number): Promise<UserDTO | undefined> {
        const userDTO: UserDTO = await this.userService.findById(userId);
        return userDTO;
    }

}