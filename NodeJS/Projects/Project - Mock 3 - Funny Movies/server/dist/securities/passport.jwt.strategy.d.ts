import { Strategy, VerifiedCallback } from 'passport-jwt';
import { Payload } from './payload.interface';
import { AuthService } from '../services/auth.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(payload: Payload, done: VerifiedCallback): Promise<any>;
}
export {};
