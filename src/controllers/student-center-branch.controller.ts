import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Student,
  CenterBranch,
} from '../models';
import {StudentRepository} from '../repositories';

export class StudentCenterBranchController {
  constructor(
    @repository(StudentRepository)
    public studentRepository: StudentRepository,
  ) { }

  @get('/students/{id}/center-branch', {
    responses: {
      '200': {
        description: 'CenterBranch belonging to Student',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(CenterBranch)},
          },
        },
      },
    },
  })
  async getCenterBranch(
    @param.path.number('id') id: typeof Student.prototype.id,
  ): Promise<CenterBranch> {
    return this.studentRepository.centerBranch(id);
  }
}
