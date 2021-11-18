import {Entity, model, property} from '@loopback/repository';

@model()
export class Employee extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  documentId: string;

  @property({
    type: 'string',
    required: true,
  })
  names: string;

  @property({
    type: 'string',
    required: true,
  })
  surnames: string;

  @property({
    type: 'boolean',
    required: true,
  })
  status: boolean;

  @property({
    type: 'date',
    required: true,
  })
  admissionDate: string;

  @property({
    type: 'date',
  })
  dischargeDate?: string;

  @property({
    type: 'string',
    required: true,
  })
  position: string;

  @property({
    type: 'string',
    required: true,
  })
  departament: string;

  @property({
    type: 'string',
    required: true,
  })
  town: string;

  @property({
    type: 'number',
    required: true,
  })
  commission: number;

  @property({
    type: 'array',
    itemType: 'string',
  })
  dependentEmployee?: string[];

  @property({
    type: 'string',
  })
  photo?: string;
  

  constructor(data?: Partial<Employee>) {
    super(data);
  }
}

export interface EmployeeRelations {
  // describe navigational properties here
}

export type EmployeeWithRelations = Employee & EmployeeRelations;
