// import { Student } from './student.model';
// import { Subjects } from './subjects.model';
import { Entity, model, property } from '@loopback/repository';

@model()
export class Tuition extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'number',
  })
  price?: number;

  @property({
    type:'number'
  })
  payment?: number;

  @property({
    type:'string'
  })
  status?: string;

  // @property({
  //   type:'number'
  // })
  // subjectsId?: number;
  // @belongsTo(() => Subjects)
  // subjectsId?: number;

  // @property({
  //   type:'number'
  // })
  // studentId?: number;
  // @belongsTo(() => Student)
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

  constructor(data?: Partial<Tuition>) {
    super(data);
  }
}

export interface TuitionRelations {
  // describe navigational properties here
}

export type TuitionWithRelations = Tuition & TuitionRelations;
