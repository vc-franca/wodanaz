import { UserEntity } from '@/modules/users/domain/UserEntity';
import { BaseRepository } from '@/shared/repositories/BaseRepository';

export interface UserRepository extends BaseRepository<UserEntity, string> { };
