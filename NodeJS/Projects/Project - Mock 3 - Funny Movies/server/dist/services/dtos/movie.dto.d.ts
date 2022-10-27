import { BaseDTO } from './base/base.dto';
import { UserDTO } from './user.dto';
export declare class MovieDTO extends BaseDTO {
    title: string;
    description: string;
    url: string;
    sharedBy: UserDTO;
}
