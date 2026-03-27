import { BaseEntity } from "@/shared/domain/base.entity";
import { BaseRepository } from "@/shared/domain/base.repository";
import { CreateDTO, UpdateDTO } from "@/shared/application/base.dto";

export class BaseUseCase<
    Entity extends BaseEntity,
    Repo extends BaseRepository<Entity, EntityId>,
    EntityId = Entity['id']
> {

    constructor(protected repository: Repo) { }

    async list(): Promise<Entity[]> {
        return this.repository.list();
    }

    async getId(id: EntityId): Promise<Entity> {
        return this.repository.getId(id);
    }

    async create(data: CreateDTO<Entity>): Promise<Entity> {
        const entity = {
            id: crypto.randomUUID() as EntityId,
            ...data,
        } as any as Entity;

        return this.repository.create(entity);
    }

    async update(id: EntityId, data: UpdateDTO<Entity>): Promise<Entity> {
        return this.repository.update(id, data);
    }

    async remove(id: EntityId): Promise<void> {
        return this.repository.remove(id);
    }
}
