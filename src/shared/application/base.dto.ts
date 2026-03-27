import { BaseEntity } from '@/shared/domain/base.entity';

export type CreateDTO<Entity extends BaseEntity> = Omit<Entity, 'id'>;
export type UpdateDTO<Entity extends BaseEntity> = Partial<Omit<Entity, 'id'>>;