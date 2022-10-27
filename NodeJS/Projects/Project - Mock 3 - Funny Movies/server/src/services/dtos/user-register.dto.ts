/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { BaseDTO } from './base/base.dto';

/**
 * An User DTO object.
 */
export class UserRegisterDTO extends BaseDTO {
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    role: string;
}
