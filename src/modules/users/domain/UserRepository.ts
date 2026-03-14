import { UserEntity } from '@/modules/users/domain/UserEntity';
import { BaseRepository } from '@/shared/repositories/BaseRepository';
import { UserId } from '@/shared/brands/UserId';

export interface UserRepository extends BaseRepository<UserEntity, UserId> { };
