import { BaseEntity } from '@/shared/domain/base.entity';
import { CreateDTO } from '@/shared/application/base.dto';

type EntityFactory<Entity extends BaseEntity> = (
    data: CreateDTO<Entity>
 ) => Entity;