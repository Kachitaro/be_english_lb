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
import {Subjects} from '../models';
import {SubjectsRepository} from '../repositories';

export class SubjectsController {
  constructor(
    @repository(SubjectsRepository)
    public subjectsRepository : SubjectsRepository,
  ) {}

  @post('/subjects')
  @response(200, {
    description: 'Subjects model instance',
    content: {'application/json': {schema: getModelSchemaRef(Subjects)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Subjects, {
            title: 'NewSubjects',
            exclude: ['id'],
          }),
        },
      },
    })
    subjects: Omit<Subjects, 'id'>,
  ): Promise<Subjects> {
    return this.subjectsRepository.create(subjects);
  }

  @get('/subjects/count')
  @response(200, {
    description: 'Subjects model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Subjects) where?: Where<Subjects>,
  ): Promise<Count> {
    return this.subjectsRepository.count(where);
  }

  @get('/subjects')
  @response(200, {
    description: 'Array of Subjects model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Subjects, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Subjects) filter?: Filter<Subjects>,
  ): Promise<Subjects[]> {
    return this.subjectsRepository.find(filter);
  }

  @patch('/subjects')
  @response(200, {
    description: 'Subjects PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Subjects, {partial: true}),
        },
      },
    })
    subjects: Subjects,
    @param.where(Subjects) where?: Where<Subjects>,
  ): Promise<Count> {
    return this.subjectsRepository.updateAll(subjects, where);
  }

  @get('/subjects/{id}')
  @response(200, {
    description: 'Subjects model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Subjects, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Subjects, {exclude: 'where'}) filter?: FilterExcludingWhere<Subjects>
  ): Promise<Subjects> {
    return this.subjectsRepository.findById(id, filter);
  }

  @patch('/subjects/{id}')
  @response(204, {
    description: 'Subjects PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Subjects, {partial: true}),
        },
      },
    })
    subjects: Subjects,
  ): Promise<void> {
    await this.subjectsRepository.updateById(id, subjects);
  }

  @put('/subjects/{id}')
  @response(204, {
    description: 'Subjects PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() subjects: Subjects,
  ): Promise<void> {
    await this.subjectsRepository.replaceById(id, subjects);
  }

  @del('/subjects/{id}')
  @response(204, {
    description: 'Subjects DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.subjectsRepository.deleteById(id);
  }
}
