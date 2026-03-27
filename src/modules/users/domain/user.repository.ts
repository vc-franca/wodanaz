import { UserEntity } from '@/modules/users/domain/user.entity';
import { BaseRepository } from '@/shared/domain/base.repository';

export interface UserRepository extends BaseRepository<UserEntity> { };
