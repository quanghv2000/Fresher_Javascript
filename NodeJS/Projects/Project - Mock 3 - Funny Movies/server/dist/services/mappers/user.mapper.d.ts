import { User } from "../../entities/user.entity";
import { UserDTO } from "../dtos/user.dto";
export declare class UserMapper {
    static fromDTOtoEntity(userDTO: UserDTO): User;
    static fromEntityToDTO(user: User): UserDTO;
}
