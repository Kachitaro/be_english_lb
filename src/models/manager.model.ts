import {Entity, model, property} from '@loopback/repository';

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

  @property({
    name:'manager_id',
    type: 'number',
  })
  managerId?: number;

  @property({
    type: 'number',
  })
  workplaceId?: number;

  @property({
    type: 'date',
    name: 'created_at',
    default: Date()
  })
  createdAt?: Date;

  @property({
    name: 'updated_at',
    type: 'date',
    default: Date()
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
