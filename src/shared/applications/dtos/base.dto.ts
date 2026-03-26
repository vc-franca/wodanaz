import { BaseEntity } from '@/shared/domains/BaseEntity';

export type CreateDTO<Entity extends BaseEntity> = Omit<Entity, 'id'>;
export type UpdateDTO<Entity extends BaseEntity> = Partial<Omit<Entity, 'id'>>;