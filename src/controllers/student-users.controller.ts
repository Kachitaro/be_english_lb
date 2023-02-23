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
  Users,
} from '../models';
import {StudentRepository} from '../repositories';

export class StudentUsersController {
  constructor(
    @repository(StudentRepository)
    public studentRepository: StudentRepository,
  ) { }

  @get('/students/{id}/users', {
    responses: {
      '200': {
        description: 'Users belonging to Student',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Users)},
          },
        },
      },
    },
  })
  async getUsers(
    @param.path.number('id') id: typeof Student.prototype.id,
  ): Promise<Users> {
    return this.studentRepository.users(id);
  }
}
