import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Teacher} from '../models';
import {TeacherRepository} from '../repositories';

export class TeacherController {
  constructor(
    @repository(TeacherRepository)
    public teacherRepository : TeacherRepository,
  ) {}

  @post('/teachers')
  @response(200, {
    description: 'Teacher model instance',
    content: {'application/json': {schema: getModelSchemaRef(Teacher)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Teacher, {
            title: 'NewTeacher',
            
          }),
        },
      },
    })
    teacher: Teacher,
  ): Promise<Teacher> {
    return this.teacherRepository.create(teacher);
  }

  @get('/teachers/count')
  @response(200, {
    description: 'Teacher model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Teacher) where?: Where<Teacher>,
  ): Promise<Count> {
    return this.teacherRepository.count(where);
  }

  @get('/teachers')
  @response(200, {
    description: 'Array of Teacher model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Teacher, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Teacher) filter?: Filter<Teacher>,
  ): Promise<Teacher[]> {
    return this.teacherRepository.find(filter);
  }

  @patch('/teachers')
  @response(200, {
    description: 'Teacher PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Teacher, {partial: true}),
        },
      },
    })
    teacher: Teacher,
    @param.where(Teacher) where?: Where<Teacher>,
  ): Promise<Count> {
    return this.teacherRepository.updateAll(teacher, where);
  }

  @get('/teachers/{id}')
  @response(200, {
    description: 'Teacher model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Teacher, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Teacher, {exclude: 'where'}) filter?: FilterExcludingWhere<Teacher>
  ): Promise<Teacher> {
    return this.teacherRepository.findById(id, filter);
  }

  @patch('/teachers/{id}')
  @response(204, {
    description: 'Teacher PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Teacher, {partial: true}),
        },
      },
    })
    teacher: Teacher,
  ): Promise<void> {
    await this.teacherRepository.updateById(id, teacher);
  }

  @put('/teachers/{id}')
  @response(204, {
    description: 'Teacher PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() teacher: Teacher,
  ): Promise<void> {
    await this.teacherRepository.replaceById(id, teacher);
  }

  @del('/teachers/{id}')
  @response(204, {
    description: 'Teacher DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.teacherRepository.deleteById(id);
  }
}
