import {Entity, model, property} from '@loopback/repository';

@model()
export class CenterBranch extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    name: 'phone_number',
    type: 'string',
  })
  phoneNumber?: string;

  @property({
    name: 'created_at',
    type: 'date',
    defaultFn: 'now',
  })
  createdAt?: Date;

  @property({
    name: 'updated_at',
    type: 'date',
    defaultFn: 'now'
  })
  updatedAt?: Date;




  constructor(data?: Partial<CenterBranch>) {
    super(data);
  }
}

export interface CenterBranchRelations {
  // describe navigational properties here
}

export type CenterBranchWithRelations = CenterBranch & CenterBranchRelations;
