import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PgDataSource} from '../datasources';
import {CenterBranch, CenterBranchRelations} from '../models';

export class CenterBranchRepository extends DefaultCrudRepository<
  CenterBranch,
  typeof CenterBranch.prototype.id,
  CenterBranchRelations
> {
  constructor(
    @inject('datasources.pg') dataSource: PgDataSource,
  ) {
    super(CenterBranch, dataSource);
  }
}
