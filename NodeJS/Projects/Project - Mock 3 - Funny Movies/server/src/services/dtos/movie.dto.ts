/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';
import { BaseDTO } from './base/base.dto';
import { UserDTO } from './user.dto';

/**
 * An Movie DTO object.
 */
export class MovieDTO extends BaseDTO {
    @IsString()
    title: string;
    @IsString()
    description: string;
    @IsString()
    url: string;
    sharedBy: UserDTO;
}
