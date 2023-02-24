// import { Users } from './users.model';
import { Entity, model, property} from '@loopback/repository';

@model()
export class Manager extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  code?: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    name: 'phone_number',
    type: 'string',
  })
  phoneNumber?: string;

  @property({
    type: 'string',
  })
  gender?: string;

  @property({
    type: 'string',
  })
  address?: string;


  //
  // @belongsTo(() => Users)
  // managerId?: number;
  @property({
    type: 'number',
  })
  centerBranchId?: number;

  @property({
    type: 'string',
  })
  usersId?: string;

  @property({
    type: 'number',
  })
  workplaceId?: number;

  @property({
    type: 'date',
    name: 'created_at',
    defaultFn: 'now'
  })
  createdAt?: Date;

  @property({
    name: 'updated_at',
    type: 'date',
    defaultFn: 'now'
  })
  updatedAt?: Date;

  constructor(data?: Partial<Manager>) {
    super(data);
  }
}

export interface ManagerRelations {
  // describe navigational properties here
}

export type ManagerWithRelations = Manager & ManagerRelations;
