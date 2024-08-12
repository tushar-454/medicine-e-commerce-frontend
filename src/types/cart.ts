import { ProductType } from './product';

export type CartType = {
  _id: string;
  user: string;
  product: ProductType;
  varient: number;
  quantity: number;
};
