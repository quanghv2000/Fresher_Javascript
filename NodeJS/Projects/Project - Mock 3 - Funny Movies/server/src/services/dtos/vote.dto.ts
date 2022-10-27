/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';
import { BaseDTO } from './base/base.dto';
import { MovieDTO } from './movie.dto';
import { UserDTO } from './user.dto';

/**
 * An Vote DTO object.
 */
export class VoteDTO extends BaseDTO {
    @IsString()
    status: string;
    movie: MovieDTO;
    user: UserDTO;
}
