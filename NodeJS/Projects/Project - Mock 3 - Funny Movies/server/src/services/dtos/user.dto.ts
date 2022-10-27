/* eslint-disable prettier/prettier */
import { IsEmail } from 'class-validator';
import { Exclude } from 'class-transformer';
import { BaseDTO } from './base/base.dto';

/**
 * An User DTO object.
 */
export class UserDTO extends BaseDTO {
    @IsEmail()
    email: string;

    @Exclude()
    password: string;

    role: string;
}
