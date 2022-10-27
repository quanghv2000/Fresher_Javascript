import { BaseDTO } from './base/base.dto';
import { MovieDTO } from './movie.dto';
import { UserDTO } from './user.dto';
export declare class VoteDTO extends BaseDTO {
    status: string;
    movie: MovieDTO;
    user: UserDTO;
}
