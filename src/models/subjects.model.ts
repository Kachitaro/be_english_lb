import {Entity, model, property} from '@loopback/repository';

@model()
export class Subjects extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type:'string'
  })
  name?: string;

  // @belongsTo(() => Teacher)
  // teacherId?: number;

  @property({
    type: 'date',
    name: 'start_at',
    defaultFn: 'now'
  })
  StartAt?: Date;

  @property({
    name: 'end_at',
    type: 'date',
    defaultFn: 'now'
  })
  EndAt?: Date;


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

  constructor(data?: Partial<Subjects>) {
    super(data);
  }
}

export interface SubjectsRelations {
  // describe navigational properties here
}

export type SubjectsWithRelations = Subjects & SubjectsRelations;
