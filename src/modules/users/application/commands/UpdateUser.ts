import { CreateUpdateUserDTO } from "@/modules/users/application/dtos/CreateUpdateUser.dto";
import { UserEntity } from "@/modules/users/domain/UserEntity";
import { UserRepository } from "@/modules/users/domain/UserRepository";
import { UserId } from "@/shared/brands/UserId";

export class UpdateUser {
    constructor(private userRepository: UserRepository) { }

    async execute(id: UserId, data: CreateUpdateUserDTO): Promise<UserEntity> {

        const user: UserEntity = {
            id,
            name: data.name,
            email: data.email
        };

        await this.userRepository.update(id, user);

        return user;
    }
}
