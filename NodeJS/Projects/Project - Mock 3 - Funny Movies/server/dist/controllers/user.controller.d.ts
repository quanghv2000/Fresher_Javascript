import { Request } from 'express';
import { UserDTO } from '../services/dtos/user.dto';
import { UserService } from '../services/user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllCategories(): Promise<UserDTO[]>;
    getUserById(id: number): Promise<UserDTO>;
    createUser(req: Request, userDTO: UserDTO): Promise<UserDTO>;
    updateUser(req: Request, userDTO: UserDTO): Promise<UserDTO>;
    deleteUser(id: number): Promise<UserDTO>;
}
