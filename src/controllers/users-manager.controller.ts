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
  Manager,
} from '../models';
import {UsersRepository} from '../repositories';

export class UsersManagerController {
  constructor(
    @repository(UsersRepository)
    public usersRepository: UsersRepository,
  ) { }

  @get('/users/{id}/manager', {
    responses: {
      '200': {
        description: 'Manager belonging to Users',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Manager)},
          },
        },
      },
    },
  })
  async getManager(
    @param.path.number('id') id: typeof Users.prototype.id,
  ): Promise<Manager> {
    return this.usersRepository.manager(id);
  }
}
