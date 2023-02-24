
import {Entity, model, property, belongsTo, hasOne} from '@loopback/repository';
import {Tuition} from './tuition.model';
import {CenterBranch} from './center-branch.model';

@model()
export class Student extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  email: string;

  @property({
    type: 'string',
  })
  name: string;

  @property({
    name: 'phone_number',
    type: 'string',
  })
  phoneNumber: string;

  @property({
    type: 'string',
  })
  gender: string;

  @property({
    type: 'string',
  })
  address: string;

  @property({
    type: 'string',
  })
  schedule?: string;

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

  @property({
    type: 'number',
  })
  subjectsId?: number;

  @hasOne(() => Tuition)
  tuition: Tuition;

  @belongsTo(() => CenterBranch)
  centerBranchId: number;

  @property({
    type: 'number',
  })
  usersId?: number;

  constructor(data?: Partial<Student>) {
    super(data);
  }
}

export interface StudentRelations {
  // describe navigational properties here
}

export type StudentWithRelations = Student & StudentRelations;
