import { BaseEntity } from "@/shared/domain/base.entity";
import { Email } from '@/modules/users/domain/value-objects/email.vo'

export type UserEntity = BaseEntity & {
    name: string;
    email: string;
};

