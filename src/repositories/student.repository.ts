import { inject, Getter} from '@loopback/core';
import { DefaultCrudRepository, repository, BelongsToAccessor, HasOneRepositoryFactory} from '@loopback/repository';
import { PgDataSource } from '../datasources';
import { Student, StudentRelations, Tuition, CenterBranch} from '../models';
import {TuitionRepository} from './tuition.repository';
import {CenterBranchRepository} from './center-branch.repository';

export class StudentRepository extends DefaultCrudRepository<
  Student,
  typeof Student.prototype.id,
  StudentRelations
> {

  public readonly tuition: HasOneRepositoryFactory<Tuition, typeof Student.prototype.id>;

  public readonly centerBranch: BelongsToAccessor<CenterBranch, typeof Student.prototype.id>;

  constructor(
    @inject('datasources.pg') dataSource: PgDataSource, @repository.getter('TuitionRepository') protected tuitionRepositoryGetter: Getter<TuitionRepository>, @repository.getter('CenterBranchRepository') protected centerBranchRepositoryGetter: Getter<CenterBranchRepository>,
  ) {
    super(Student, dataSource);
    this.centerBranch = this.createBelongsToAccessorFor('centerBranch', centerBranchRepositoryGetter,);
    this.registerInclusionResolver('centerBranch', this.centerBranch.inclusionResolver);
    this.tuition = this.createHasOneRepositoryFactoryFor('tuition', tuitionRepositoryGetter);
    this.registerInclusionResolver('tuition', this.tuition.inclusionResolver);
  }
}
