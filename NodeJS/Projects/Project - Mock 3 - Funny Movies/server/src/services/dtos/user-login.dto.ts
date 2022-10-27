/* eslint-disable prettier/prettier */
import { IsEmail, IsString } from 'class-validator';

/**
 * A DTO representing a login user.
 */
export class UserLoginDTO {
    @IsEmail()
    readonly email: string;

    @IsString()
    readonly password: string;

    readonly rememberMe?: boolean;
}
