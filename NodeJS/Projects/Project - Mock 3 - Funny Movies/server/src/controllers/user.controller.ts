/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request } from 'express';
import { Roles } from '../security/decorators/roles.decorator';
import { RoleType } from '../security/role-type';
import { UserDTO } from '../services/dtos/user.dto';
import { UserService } from '../services/user.service';
import { RolesGuard } from '../security/guards/roles.guard';
import { AuthGuard } from '../security/guards/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Roles(RoleType.ADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  @Get('/get-all-user')
  async getAllCategories(): Promise<UserDTO[]> {
    const users = await this.userService.findAll();

    return users;
  }

  @Roles(RoleType.ADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  @Get('/get-user-by-id/:id')
  async getUserById(@Param('id', ParseIntPipe) id: number): Promise<UserDTO> {
    const userFound = await this.userService.findById(id);

    if (!userFound) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return userFound;
  }

  @Roles(RoleType.ADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  @UsePipes(ValidationPipe)
  @Post('/create-user')
  async createUser(
    @Req() req: Request,
    @Body() userDTO: UserDTO,
  ): Promise<UserDTO> {
    const userReq: any = req.user;
    userDTO.createdBy = userReq.email;
    const userCreated = await this.userService.save(userDTO);

    return userCreated;
  }

  @Roles(RoleType.ADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  @UsePipes(ValidationPipe)
  @Put('/update-user')
  async updateUser(
    @Req() req: Request,
    @Body() userDTO: UserDTO,
  ): Promise<UserDTO> {
    const userFoundById = await this.userService.findById(userDTO.id);

    if (!userFoundById) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const userReq: any = req.user;
    userDTO.createdBy = userReq.email;

    const userUpdated = await this.userService.update(userDTO);

    return userUpdated;
  }

  @Roles(RoleType.ADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  @Delete('/delete-user/:id')
  async deleteUser(@Param('id') id: number): Promise<UserDTO> {
    const userToDelete = await this.userService.findById(id);

    if (!userToDelete) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return await this.userService.delete(userToDelete);
  }
}
