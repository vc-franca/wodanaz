import { CreateDTO, UpdateDTO } from '@/shared/applications/dtos/base.dto';

export interface BaseRepository<
    Entity extends { id: string },
    EntityId = Entity['id']
> {
    list(): Promise<Entity[]>
    getId(id: EntityId): Promise<Entity>
    create(data: CreateDTO<Entity>): Promise<Entity>
    update(id: EntityId, data: UpdateDTO<Entity>): Promise<Entity>
    remove(id: EntityId): Promise<void>
}
