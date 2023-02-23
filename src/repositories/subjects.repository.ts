import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {PgDataSource} from '../datasources';
import {Subjects, SubjectsRelations, Student} from '../models';
import {StudentRepository} from './student.repository';

export class SubjectsRepository extends DefaultCrudRepository<
  Subjects,
  typeof Subjects.prototype.id,
  SubjectsRelations
> {

  public readonly students: HasManyRepositoryFactory<Student, typeof Subjects.prototype.id>;

  constructor(
    @inject('datasources.pg') dataSource: PgDataSource, @repository.getter('StudentRepository') protected studentRepositoryGetter: Getter<StudentRepository>,
  ) {
    super(Subjects, dataSource);
    this.students = this.createHasManyRepositoryFactoryFor('students', studentRepositoryGetter,);
    this.registerInclusionResolver('students', this.students.inclusionResolver);
  }
}
