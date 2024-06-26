import type FakerCarrier from '@data/faker/carrier';
import type FakerCustomer from '@data/faker/customer';

type ShoppingCartCreator = {
  id?: number
  orderID?: number
  customer?: FakerCustomer
  carrier?: FakerCarrier
  online?: boolean
}

type ShoppingCartDetails = {
  id_cart?: number
  id_order?: number
  status?: string
  lastname?: string
  total?: string
  carrier?: string
  date?: string
  online?: string
}

export type {
  ShoppingCartCreator,
  ShoppingCartDetails,
};
