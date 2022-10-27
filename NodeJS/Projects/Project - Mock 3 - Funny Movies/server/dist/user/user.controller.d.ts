import { UserDTO } from './dtos/user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<any[] | undefined>;
    getUserById(id: number): Promise<any | undefined>;
    createUser(userDTO: UserDTO): Promise<UserDTO | undefined>;
}
