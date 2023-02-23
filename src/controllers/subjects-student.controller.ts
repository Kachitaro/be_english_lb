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
  Subjects,
  Student,
} from '../models';
import {SubjectsRepository} from '../repositories';

export class SubjectsStudentController {
  constructor(
    @repository(SubjectsRepository) protected subjectsRepository: SubjectsRepository,
  ) { }

  @get('/subjects/{id}/students', {
    responses: {
      '200': {
        description: 'Array of Subjects has many Student',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Student)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Student>,
  ): Promise<Student[]> {
    return this.subjectsRepository.students(id).find(filter);
  }

  @post('/subjects/{id}/students', {
    responses: {
      '200': {
        description: 'Subjects model instance',
        content: {'application/json': {schema: getModelSchemaRef(Student)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Subjects.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Student, {
            title: 'NewStudentInSubjects',
            exclude: ['id'],
            optional: ['subjectsId']
          }),
        },
      },
    }) student: Omit<Student, 'id'>,
  ): Promise<Student> {
    return this.subjectsRepository.students(id).create(student);
  }

  @patch('/subjects/{id}/students', {
    responses: {
      '200': {
        description: 'Subjects.Student PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Student, {partial: true}),
        },
      },
    })
    student: Partial<Student>,
    @param.query.object('where', getWhereSchemaFor(Student)) where?: Where<Student>,
  ): Promise<Count> {
    return this.subjectsRepository.students(id).patch(student, where);
  }

  @del('/subjects/{id}/students', {
    responses: {
      '200': {
        description: 'Subjects.Student DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Student)) where?: Where<Student>,
  ): Promise<Count> {
    return this.subjectsRepository.students(id).delete(where);
  }
}
