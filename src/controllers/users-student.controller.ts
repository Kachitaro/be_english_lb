import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Users,
  Student,
} from '../models';
import {UsersRepository} from '../repositories';

export class UsersStudentController {
  constructor(
    @repository(UsersRepository)
    public usersRepository: UsersRepository,
  ) { }

  @get('/users/{id}/student', {
    responses: {
      '200': {
        description: 'Student belonging to Users',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Student)},
          },
        },
      },
    },
  })
  async getStudent(
    @param.path.number('id') id: typeof Users.prototype.id,
  ): Promise<Student> {
    return this.usersRepository.student(id);
  }
}
