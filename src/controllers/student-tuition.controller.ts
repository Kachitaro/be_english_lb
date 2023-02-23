import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Student,
  Tuition,
} from '../models';
import {StudentRepository} from '../repositories';

export class StudentTuitionController {
  constructor(
    @repository(StudentRepository) protected studentRepository: StudentRepository,
  ) { }

  @get('/students/{id}/tuition', {
    responses: {
      '200': {
        description: 'Student has one Tuition',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Tuition),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Tuition>,
  ): Promise<Tuition> {
    return this.studentRepository.tuition(id).get(filter);
  }

  @post('/students/{id}/tuition', {
    responses: {
      '200': {
        description: 'Student model instance',
        content: {'application/json': {schema: getModelSchemaRef(Tuition)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Student.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tuition, {
            title: 'NewTuitionInStudent',
            exclude: ['id'],
            optional: ['studentId']
          }),
        },
      },
    }) tuition: Omit<Tuition, 'id'>,
  ): Promise<Tuition> {
    return this.studentRepository.tuition(id).create(tuition);
  }

  @patch('/students/{id}/tuition', {
    responses: {
      '200': {
        description: 'Student.Tuition PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tuition, {partial: true}),
        },
      },
    })
    tuition: Partial<Tuition>,
    @param.query.object('where', getWhereSchemaFor(Tuition)) where?: Where<Tuition>,
  ): Promise<Count> {
    return this.studentRepository.tuition(id).patch(tuition, where);
  }

  @del('/students/{id}/tuition', {
    responses: {
      '200': {
        description: 'Student.Tuition DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Tuition)) where?: Where<Tuition>,
  ): Promise<Count> {
    return this.studentRepository.tuition(id).delete(where);
  }
}
