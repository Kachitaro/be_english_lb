import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Student} from './student.model';
import {Manager} from './manager.model';

@model()
export class Users extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  username?: string;

  @property({
    type: 'string',
  })
  password?: string;

  @property({
    type: 'date',
    name: 'created_at',
    default: () => {
      const d = new Date();
      d.setDate(d.getDate());
      return d;
    },
  })
  createdAt?: Date;

  @property({
    name: 'updated_at',
    type: 'date',
    default: () => {
      const d = new Date();
      d.setDate(d.getDate());
      return d;
    },
  })
  updatedAt?: Date;

  @belongsTo(() => Student)
  studentId: number;

  @belongsTo(() => Manager)
  managerId: number;

  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;
