import {inject, Getter} from '@loopback/core';
import {PgDataSource} from '../datasources';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Users, UsersRelations, Student, Manager} from '../models';
import {StudentRepository} from './student.repository';
import {ManagerRepository} from './manager.repository';

export class UsersRepository extends DefaultCrudRepository<
  Users,
  typeof Users.prototype.id,
  UsersRelations
> {

  public readonly student: BelongsToAccessor<Student, typeof Users.prototype.id>;

  public readonly manager: BelongsToAccessor<Manager, typeof Users.prototype.id>;

  constructor(
    @inject('datasources.pg') dataSource: PgDataSource, @repository.getter('StudentRepository') protected studentRepositoryGetter: Getter<StudentRepository>, @repository.getter('ManagerRepository') protected managerRepositoryGetter: Getter<ManagerRepository>,
  ) {
    super(Users, dataSource);
    this.manager = this.createBelongsToAccessorFor('manager', managerRepositoryGetter,);
    this.registerInclusionResolver('manager', this.manager.inclusionResolver);
    this.student = this.createBelongsToAccessorFor('student', studentRepositoryGetter,);
    this.registerInclusionResolver('student', this.student.inclusionResolver);
  }
}
