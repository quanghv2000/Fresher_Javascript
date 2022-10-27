import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './dtos/user.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<UserDTO[] | undefined>;
    findById(id: number): Promise<UserDTO | undefined>;
    findByEmail(email: string): Promise<UserDTO | undefined>;
    save(userDTO: UserDTO): Promise<UserDTO | undefined>;
    update(userDTO: UserDTO): Promise<UserDTO | undefined>;
    delete(userDTO: UserDTO): Promise<UserDTO | undefined>;
}
