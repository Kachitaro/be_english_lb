import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PgDataSource} from '../datasources';
import {Subjects, SubjectsRelations} from '../models';

export class SubjectsRepository extends DefaultCrudRepository<
  Subjects,
  typeof Subjects.prototype.id,
  SubjectsRelations
> {
  constructor(
    @inject('datasources.pg') dataSource: PgDataSource,
  ) {
    super(Subjects, dataSource);
  }
}
