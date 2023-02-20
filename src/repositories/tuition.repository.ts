import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PgDataSource} from '../datasources';
import {Tuition, TuitionRelations} from '../models';

export class TuitionRepository extends DefaultCrudRepository<
  Tuition,
  typeof Tuition.prototype.id,
  TuitionRelations
> {
  constructor(
    @inject('datasources.pg') dataSource: PgDataSource,
  ) {
    super(Tuition, dataSource);
  }
}
