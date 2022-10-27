/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './dtos/user.dto';
import { UserMapper } from './mappers/user.mapper';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<UserDTO[] | undefined> {
    const users = await this.userRepository.find();

    const usersDTO: UserDTO[] = [];

    users.forEach((user) => {
      usersDTO.push(UserMapper.fromEntityToDTO(user));
    });

    return usersDTO;
  }

  async findById(id: number): Promise<UserDTO | undefined> {
    if (!id) {
      return;
    }

    const user = await this.userRepository.findOne({
      where: {
        id: id,
      },
    });

    return UserMapper.fromEntityToDTO(user);
  }

  async findByEmail(email: string): Promise<UserDTO | undefined> {
    if (!email) {
      return;
    }

    const user = await this.userRepository.findOne({
      where: {
        email: email,
      },
    });

    return UserMapper.fromEntityToDTO(user);
  }

  async save(userDTO: UserDTO): Promise<UserDTO | undefined> {
    const userFoundByEmail = await this.findByEmail(userDTO.email);
    if (userFoundByEmail) {
      throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);
    }

    const newUser = UserMapper.fromDTOtoEntity(userDTO);
    newUser.password = await bcrypt.hash(newUser.password, 10);
    const userCreated = await this.userRepository.save(newUser);

    return UserMapper.fromEntityToDTO(userCreated);
  }

  async update(userDTO: UserDTO): Promise<UserDTO | undefined> {
    const userFoundByEmail = await this.findByEmail(userDTO.email);
    if (userFoundByEmail && userFoundByEmail?.id !== userDTO.id) {
      throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);
    }

    const userToUpdate = UserMapper.fromDTOtoEntity(userDTO);
    const userUpdated = await this.userRepository.save(userToUpdate);

    return UserMapper.fromEntityToDTO(userUpdated);
  }

  async delete(userDTO: UserDTO): Promise<UserDTO | undefined> {
    const userToDelete = UserMapper.fromDTOtoEntity(userDTO);
    const userDeleted = await this.userRepository.remove(userToDelete);

    return UserMapper.fromEntityToDTO(userDeleted);
  }
}
