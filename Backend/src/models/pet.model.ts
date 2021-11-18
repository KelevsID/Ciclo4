import {Entity, model, property} from '@loopback/repository';

@model()
export class Pet extends Entity {
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
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  species: string;

  @property({
    type: 'string',
    required: true,
  })
  race: string;

  @property({
    type: 'string',
    required: true,
  })
  colour: string;

  @property({
    type: 'string',
    required: true,
  })
  sex: string;

  @property({
    type: 'string',
    required: true,
  })
  weight: string;

  @property({
    type: 'string',
    required: true,
  })
  diseases: string;

  @property({
    type: 'date',
    required: true,
  })
  bornDate: string;

  @property({
    type: 'boolean',
    required: true,
  })
  planStatus: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  rescinded: boolean;

  @property({
    type: 'string',
    required: true,
  })
  reasonRescinded: string;

  @property({
    type: 'string',
  })
  photo?: string;


  constructor(data?: Partial<Pet>) {
    super(data);
  }
}

export interface PetRelations {
  // describe navigational properties here
}

export type PetWithRelations = Pet & PetRelations;
