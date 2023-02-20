import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { PgDataSource } from '../datasources';
import { Student, StudentRelations } from '../models';

export class StudentRepository extends DefaultCrudRepository<
  Student,
  typeof Student.prototype.id,
  StudentRelations
> {
  constructor(
    @inject('datasources.pg') dataSource: PgDataSource,
  ) {
    super(Student, dataSource);
  }
}
