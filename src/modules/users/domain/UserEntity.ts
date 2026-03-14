import { UserId } from '@/shared/brands/UserId';

export interface UserEntity {
    readonly id: UserId;
    name: string;
    email: string;
};
