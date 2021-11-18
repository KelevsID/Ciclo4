import {Entity, model, property} from '@loopback/repository';

@model()
export class Order extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
    required: true,
  })
  applicationDate: string;

  @property({
    type: 'date',
    required: true,
  })
  deliveryDate: string;

  @property({
    type: 'string',
    required: true,
  })
  wayToPay: string;

  @property({
    type: 'boolean',
    required: true,
  })
  paymentStatus: boolean;

  @property({
    type: 'string',
    required: true,
  })
  observation: string;


  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;
