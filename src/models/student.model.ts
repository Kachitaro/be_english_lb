
import {Entity, model, property } from '@loopback/repository';

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

  // @property({
  //   name: 'subjects_id',
  //   type: 'number',
  // })
  // subjectsId?: number;

  // @property({
  //   name: 'student_id',
  //   type: 'number',
  // })
  // studentId?: number;
  // @belongsTo(() => Users)
  // studentId?: number;


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

  constructor(data?: Partial<Student>) {
    super(data);
  }
}

export interface StudentRelations {
  // describe navigational properties here
}

export type StudentWithRelations = Student & StudentRelations;
