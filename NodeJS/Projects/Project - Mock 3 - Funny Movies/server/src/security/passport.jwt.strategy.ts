/* eslint-disable prettier/prettier */
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Payload } from './payload.interface';
import { AuthService } from '../services/auth.service';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: 'SECRET_KEY',
    });
  }

 async validate(payload: Payload, done: VerifiedCallback): Promise<any> {
    const user = await this.authService.validateUser
    (payload);
    if (!user) {
      return done(new UnauthorizedException({ message: 'user does not exist' }), false);
    }

    return done(null, user);
  }
}
