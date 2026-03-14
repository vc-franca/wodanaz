// base CRUD repository 

export interface BaseRepository<
    TEntity,
    TId = string,
    TCreate = TEntity,
    TUpdate = TEntity
> {
    list(): Promise<TEntity[]>;
    getId(id: TId): Promise<TEntity>;
    create(data: TCreate): Promise<TEntity>;
    update(id: TId, data: TUpdate): Promise<TEntity>;
    delete(id: TId): Promise<void>;
};
