import { UserRepository } from "@/modules/users/domain/UserRepository";
import { CreateUpdateUserDTO } from "@/modules/users/application/dtos/CreateUpdateUser.dto";
import { UserEntity } from "@/modules/users/domain/UserEntity";
import { UserId } from "@/shared/utils/brands";

export class CreateUser {
    constructor(private userRepository: UserRepository) { }

    async execute(data: CreateUpdateUserDTO): Promise<UserEntity> {

        const user: UserEntity = {
            id: crypto.randomUUID() as UserId,
            name: data.name,
            email: data.email
        };

        await this.userRepository.create(user);

        return user;
    }
}
