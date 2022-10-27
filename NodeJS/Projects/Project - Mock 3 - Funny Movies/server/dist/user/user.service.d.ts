import { UserDTO } from './dtos/user.dto';
export declare class UserService {
    private users;
    findAll(): Promise<any[] | undefined>;
    findById(id: number): Promise<any | undefined>;
    findByEmail(email: string): Promise<any | undefined>;
    save(userDTO: UserDTO): Promise<any | undefined>;
}
