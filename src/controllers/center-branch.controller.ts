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
import {CenterBranch} from '../models';
import {CenterBranchRepository} from '../repositories';

export class CenterBranchController {
  constructor(
    @repository(CenterBranchRepository)
    public centerBranchRepository : CenterBranchRepository,
  ) {}

  @post('/center-branches')
  @response(200, {
    description: 'CenterBranch model instance',
    content: {'application/json': {schema: getModelSchemaRef(CenterBranch)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CenterBranch, {
            title: 'NewCenterBranch',
            exclude: ['id'],
          }),
        },
      },
    })
    centerBranch: Omit<CenterBranch, 'id'>,
  ): Promise<CenterBranch> {
    return this.centerBranchRepository.create(centerBranch);
  }

  @get('/center-branches/count')
  @response(200, {
    description: 'CenterBranch model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CenterBranch) where?: Where<CenterBranch>,
  ): Promise<Count> {
    return this.centerBranchRepository.count(where);
  }

  @get('/center-branches')
  @response(200, {
    description: 'Array of CenterBranch model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CenterBranch, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CenterBranch) filter?: Filter<CenterBranch>,
  ): Promise<CenterBranch[]> {
    return this.centerBranchRepository.find(filter);
  }

  @patch('/center-branches')
  @response(200, {
    description: 'CenterBranch PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CenterBranch, {partial: true}),
        },
      },
    })
    centerBranch: CenterBranch,
    @param.where(CenterBranch) where?: Where<CenterBranch>,
  ): Promise<Count> {
    return this.centerBranchRepository.updateAll(centerBranch, where);
  }

  @get('/center-branches/{id}')
  @response(200, {
    description: 'CenterBranch model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CenterBranch, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CenterBranch, {exclude: 'where'}) filter?: FilterExcludingWhere<CenterBranch>
  ): Promise<CenterBranch> {
    return this.centerBranchRepository.findById(id, filter);
  }

  @patch('/center-branches/{id}')
  @response(204, {
    description: 'CenterBranch PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CenterBranch, {partial: true}),
        },
      },
    })
    centerBranch: CenterBranch,
  ): Promise<void> {
    await this.centerBranchRepository.updateById(id, centerBranch);
  }

  @put('/center-branches/{id}')
  @response(204, {
    description: 'CenterBranch PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() centerBranch: CenterBranch,
  ): Promise<void> {
    await this.centerBranchRepository.replaceById(id, centerBranch);
  }

  @del('/center-branches/{id}')
  @response(204, {
    description: 'CenterBranch DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.centerBranchRepository.deleteById(id);
  }
}
