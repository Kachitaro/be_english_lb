import { Entity, model, property, hasOne} from '@loopback/repository';
import {Teacher} from './teacher.model';
import {Student} from './student.model';
import {Manager} from './manager.model';

@model()
export class Users extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    defaultFn: 'uuidv4',
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
    index:{
      unique: true
    }
  })
  email?: string;

  @property({
    type: 'string',
    required: true
  })
  password?: string;

  @property({
    type: 'string',
    required: true,
  })
  role?: string;

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

  @hasOne(() => Teacher)
  teacher: Teacher;

  @hasOne(() => Student)
  student: Student;

  @hasOne(() => Manager)
  manager: Manager;

  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;
