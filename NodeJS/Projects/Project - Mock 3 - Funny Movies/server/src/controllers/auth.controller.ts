/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Post,
  Req,
  Inject,
  CACHE_MANAGER,
  UsePipes,
  ValidationPipe,
  Res,
  HttpException,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UserLoginDTO } from '../services/dtos/user-login.dto';
import { Cache } from 'cache-manager';
import { Response, Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { Payload } from '../security/payload.interface';
import { UserRegisterDTO } from 'src/services/dtos/user-register.dto';
import { RolesGuard } from '../security/guards/roles.guard';
import { AuthGuard } from '../security/guards/auth.guard';
import { Roles } from '../security/decorators/roles.decorator';
import { RoleType } from '../security/role-type';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly jwtService: JwtService,
  ) {}

  @Post('/register')
  @UsePipes(ValidationPipe)
  async registerAccount(
    @Req() req: Request,
    @Body() userRegisterDTO: UserRegisterDTO,
  ): Promise<any> {
    return await this.authService.registerNewUser(userRegisterDTO);
  }

  @Post('/login')
  @UsePipes(ValidationPipe)
  async authorize(@Body() userLogin: UserLoginDTO): Promise<any> {
    return await this.authService.login(userLogin);
  }

  @Post('/refresh-token')
  async refreshToken(@Req() req: Request, @Res() res: Response): Promise<any> {
    const refreshTokenReq = req.headers.authorization.split(' ')[1];
    let user;
    try {
      user = await this.jwtService.verify(refreshTokenReq);
    } catch (error) {
      throw new HttpException('Invalid refresh token!', HttpStatus.BAD_REQUEST);
    }

    const payload: Payload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };
    const refreshTokenFound = await this.cacheManager.get(
      `refresh_token_${user.id}`,
    );

    if (!refreshTokenFound || refreshTokenReq !== refreshTokenFound) {
      throw new HttpException('Invalid refresh token!', HttpStatus.BAD_REQUEST);
    }

    const access_token = this.jwtService.sign(payload, {
      secret: 'SECRET_KEY',
      expiresIn: '3h',
    });

    return res.json({ access_token });
  }

  @Post('/logout')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(RoleType.ADMIN, RoleType.USER)
  async logout(@Req() req: Request, @Res() res: Response): Promise<any> {
      const userReq: any = req.user;
      await this.cacheManager.del(`refresh_token_${userReq.id}`);

      return res.json({
          message: 'Logout successfully!',
      });
  }
}
