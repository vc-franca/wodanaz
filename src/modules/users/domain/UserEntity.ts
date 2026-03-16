import { UserId } from '@/shared/utils/brands';

export interface UserEntity {
    readonly id: UserId;
    name: string;
    email: string;
};

