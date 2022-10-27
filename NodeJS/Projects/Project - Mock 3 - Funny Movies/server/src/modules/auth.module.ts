/* eslint-disable prettier/prettier */
import { CacheModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from '../controllers/auth.controller';
import { User } from '../entities/user.entity';
import { AuthService } from '../services/auth.service';
import { UserModule } from './user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../security/passport.jwt.strategy';

@Module({
    imports: [
        JwtModule.register({
            secret: 'SECRET_KEY'
        }),
        CacheModule.register(),
        TypeOrmModule.forFeature([User]),
        UserModule,
        PassportModule,
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule {}
