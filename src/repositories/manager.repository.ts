import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PgDataSource} from '../datasources';
import {Manager, ManagerRelations} from '../models';

export class ManagerRepository extends DefaultCrudRepository<
  Manager,
  typeof Manager.prototype.id,
  ManagerRelations
> {
  constructor(
    @inject('datasources.pg') dataSource: PgDataSource,
  ) {
    super(Manager, dataSource);
  }
}
