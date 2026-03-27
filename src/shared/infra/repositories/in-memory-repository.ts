import { BaseEntity } from "@/shared/domain/base.entity";
import { BaseRepository } from "@/shared/domain/base.repository";

export class BaseUseCases<
    Entity extends BaseEntity,
> implements BaseRepository<Entity> {

    private entities: Entity[] = []

    async list(): Promise<Entity[]> {
        return this.entities;
    }

    async getId(id: string) {
        const entity = this.entities.find(e => e.id === id);
        if (!entity) throw new Error('not found');
        return entity;
    }

    async create(data: Entity) {
        this.entities.push(data);
        return data;
    }

    async update(id: string, data: Partial<Entity>) {
        const index = this.entities.findIndex(e => e.id === id);
        if (index === -1) throw new Error('not found');

        const updated = { ...this.entities[index], ...data } as Entity;
        this.entities[index] = updated;

        return updated;
    }

    async remove(id: string) {
        const index = this.entities.findIndex(e => e.id === id);
        if (index === -1) throw new Error('not found');

        this.entities.splice(index, 1);
    }
}
