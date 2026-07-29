import type FakerCountry from '@data/faker/country';
import type FakerProduct from '@data/faker/product';

type DiscountType = 'cart_level'|'free_gift'|'free_shipping'|'product_level';
type DiscountCreator = {
  discountType?: DiscountType | null
  name?: string
  description?: string
  dateFrom?: string | null
  dateTo?: string | null
  neverExpires?: boolean
  allCustomers?: boolean
  customerGroups?: boolean
  singleCustomer?: boolean
  noProductCondition?: boolean
  singleProduct?: boolean
  specificProduct?: FakerProduct | null
  productSegment?: boolean
  noCartCondition?: boolean
  minimumPurchaseAmount?: boolean
  minimumAmountValue?: number | string
  minimumAmountCurrency?: string | null
  minimumAmountTax?: string | null
  minimumProductQuantity?: boolean
  productQuantity?: number | string
  discountValue?: number | string
  discountReductionType?: string
  discountCurrency?: string | null
  discountTax?: string | null
  createAutomaticDiscount?: boolean
  deliveryConditionsCountries?: FakerCountry[]
  generateRandomCode?: boolean
  discountCode?: string
  discountCompatibilityTypes?: number[]
  priority?: number
  freeGift?: FakerProduct | null
  highlightInCart?: boolean
  enabled?: boolean
};
type DiscountTypeInformation = {
  type: string
  name: string
  core: boolean
  enabled: boolean
}

export type {
  DiscountCreator,
  DiscountType,
  DiscountTypeInformation,
};
