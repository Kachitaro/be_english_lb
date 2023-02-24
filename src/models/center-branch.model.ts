import {Entity, model, property, hasMany} from '@loopback/repository';
import {Student} from './student.model';
import {Manager} from './manager.model';
import {Teacher} from './teacher.model';

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

  @hasMany(() => Student)
  students: Student[];

  @hasMany(() => Manager)
  managers: Manager[];

  @hasMany(() => Teacher)
  teachers: Teacher[];

  constructor(data?: Partial<CenterBranch>) {
    super(data);
  }
}

export interface CenterBranchRelations {
  // describe navigational properties here
}

export type CenterBranchWithRelations = CenterBranch & CenterBranchRelations;
