import { ProductType } from './product';

export type RelatedProductType = {
  relatedProducts: ProductType[];
  product: ProductType | null;
  isLoading: boolean;
  isError: boolean;
};
