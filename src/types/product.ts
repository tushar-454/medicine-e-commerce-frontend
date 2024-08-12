export type ProductType = {
  _id: string;
  name: string;
  description: string;
  photo: string;
  discount: number;
  variants: ProductVariantType[];
  category: string;
  quantity: number;
  isFeatured: boolean;
  isSpecial: boolean;
  isPopular: boolean;
  isTrending: boolean;
  isDiscounted: boolean;
  isDeleted: boolean;
};

export type ProductVariantType = {
  _id: string;
  dose: string;
  package_size: string;
  price: number;
};

export interface ProductSliceInitialState {
  isLoading: boolean;
  isError: boolean;
  product: ProductType[] | null;
}
