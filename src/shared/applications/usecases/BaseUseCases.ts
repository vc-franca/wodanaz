import { BaseEntity } from "@/shared/domains/BaseEntity";
import { BaseRepository } from "@/shared/domains/repositories/BaseRepository";
import { CreateDTO, UpdateDTO } from "@/shared/applications/dtos/base.dto";

export class BaseUseCases<
    Entity extends BaseEntity,
    EntityId = Entity['id']
> implements BaseRepository<Entity, EntityId> {

    constructor(protected entities: Entity[] = []) { }

    async list(): Promise<Entity[]> {
        return this.entities;
    }

    async getId(id: EntityId): Promise<Entity> {
        const entity = this.entities.find(e => e.id === id);

        if (!entity) throw new Error('not found');

        return entity;
    }

    async create(data: CreateDTO<Entity>): Promise<Entity> {
        const entity = {
            id: crypto.randomUUID(),
            ...data,
        } as Entity;

        this.entities.push(entity);
        return entity;
    }

    async update(id: EntityId, data: UpdateDTO<Entity>): Promise<Entity> {
        const index = this.entities.findIndex(e => e.id === id);

        if (index === -1) throw new Error('not found');

        const updated = {
            ...this.entities[index],
            ...data
        } as Entity;

        this.entities[index] = updated;

        return updated;
    }

    async remove(id: EntityId): Promise<void> {
        const index = this.entities.findIndex(e => e.id === id);

        if (index === -1) throw new Error('not found');

        this.entities.splice(index, 1);
    }
}
