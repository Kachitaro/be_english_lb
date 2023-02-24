import {Entity, model, property} from '@loopback/repository';

@model()
export class Teacher extends Entity {
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
    name: 'teacher_id',
    type: 'number',
  })
  teacherId?: number;

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

  @property({
    type: 'number',
  })
  usersId?: number;

  @property({
    type: 'number',
  })
  centerBranchId?: number;

  constructor(data?: Partial<Teacher>) {
    super(data);
  }
}

export interface TeacherRelations {
  // describe navigational properties here
}

export type TeacherWithRelations = Teacher & TeacherRelations;
