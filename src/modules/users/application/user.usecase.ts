import { UserEntity } from '@/modules/users/domain/user.entity';
import { BaseUseCase } from '@/shared/application/base.usecase';
import { Email } from '@/modules/users/domain/value-objects/email.vo';
import { CreateDTO } from '@/shared/application/base.dto';
import { UserRepository } from '@/modules/users/domain/user.repository';

export class UserUseCase extends BaseUseCase<UserEntity, UserRepository> {

    constructor(repo: UserRepository) {
        super(repo);
    }

    // Override the create method to handle the email value object
    async create(data: CreateDTO<UserEntity>) {
        const parsedData = {
            ...data,
            email: Email.create(data.email).getValue()
        }

        return super.create(parsedData);
    }
}
