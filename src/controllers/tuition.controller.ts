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
import {Tuition} from '../models';
import {TuitionRepository} from '../repositories';

export class TuitionController {
  constructor(
    @repository(TuitionRepository)
    public tuitionRepository : TuitionRepository,
  ) {}

  @post('/tuitions')
  @response(200, {
    description: 'Tuition model instance',
    content: {'application/json': {schema: getModelSchemaRef(Tuition)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tuition, {
            title: 'NewTuition',
            exclude: ['id'],
          }),
        },
      },
    })
    tuition: Omit<Tuition, 'id'>,
  ): Promise<Tuition> {
    return this.tuitionRepository.create(tuition);
  }

  @get('/tuitions/count')
  @response(200, {
    description: 'Tuition model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Tuition) where?: Where<Tuition>,
  ): Promise<Count> {
    return this.tuitionRepository.count(where);
  }

  @get('/tuitions')
  @response(200, {
    description: 'Array of Tuition model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tuition, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Tuition) filter?: Filter<Tuition>,
  ): Promise<Tuition[]> {
    return this.tuitionRepository.find(filter);
  }

  @patch('/tuitions')
  @response(200, {
    description: 'Tuition PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tuition, {partial: true}),
        },
      },
    })
    tuition: Tuition,
    @param.where(Tuition) where?: Where<Tuition>,
  ): Promise<Count> {
    return this.tuitionRepository.updateAll(tuition, where);
  }

  @get('/tuitions/{id}')
  @response(200, {
    description: 'Tuition model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tuition, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Tuition, {exclude: 'where'}) filter?: FilterExcludingWhere<Tuition>
  ): Promise<Tuition> {
    return this.tuitionRepository.findById(id, filter);
  }

  @patch('/tuitions/{id}')
  @response(204, {
    description: 'Tuition PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tuition, {partial: true}),
        },
      },
    })
    tuition: Tuition,
  ): Promise<void> {
    await this.tuitionRepository.updateById(id, tuition);
  }

  @put('/tuitions/{id}')
  @response(204, {
    description: 'Tuition PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tuition: Tuition,
  ): Promise<void> {
    await this.tuitionRepository.replaceById(id, tuition);
  }

  @del('/tuitions/{id}')
  @response(204, {
    description: 'Tuition DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tuitionRepository.deleteById(id);
  }
}
