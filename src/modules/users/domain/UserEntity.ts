import { BaseEntity } from "@/shared/domains/BaseEntity";

export type UserEntity = BaseEntity & {
    name: string;
    email: string;
};

