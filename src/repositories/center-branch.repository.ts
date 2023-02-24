import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {PgDataSource} from '../datasources';
import {CenterBranch, CenterBranchRelations, Student, Manager, Teacher} from '../models';
import {StudentRepository} from './student.repository';
import {ManagerRepository} from './manager.repository';
import {TeacherRepository} from './teacher.repository';

export class CenterBranchRepository extends DefaultCrudRepository<
  CenterBranch,
  typeof CenterBranch.prototype.id,
  CenterBranchRelations
> {

  public readonly students: HasManyRepositoryFactory<Student, typeof CenterBranch.prototype.id>;

  public readonly managers: HasManyRepositoryFactory<Manager, typeof CenterBranch.prototype.id>;

  public readonly teachers: HasManyRepositoryFactory<Teacher, typeof CenterBranch.prototype.id>;

  constructor(
    @inject('datasources.pg') dataSource: PgDataSource, @repository.getter('StudentRepository') protected studentRepositoryGetter: Getter<StudentRepository>, @repository.getter('ManagerRepository') protected managerRepositoryGetter: Getter<ManagerRepository>, @repository.getter('TeacherRepository') protected teacherRepositoryGetter: Getter<TeacherRepository>,
  ) {
    super(CenterBranch, dataSource);
    this.teachers = this.createHasManyRepositoryFactoryFor('teachers', teacherRepositoryGetter,);
    this.registerInclusionResolver('teachers', this.teachers.inclusionResolver);
    this.managers = this.createHasManyRepositoryFactoryFor('managers', managerRepositoryGetter,);
    this.registerInclusionResolver('managers', this.managers.inclusionResolver);
    this.students = this.createHasManyRepositoryFactoryFor('students', studentRepositoryGetter,);
    this.registerInclusionResolver('students', this.students.inclusionResolver);
  }
}
