export interface OrderProps {
  openOrder: any;
}

export type OrderType = {
  _id: string;
  user: string;
  products: OrderProductType[];
  totalAmount: number;
  paymentMethod: string;
  shippingInfo: {
    division: string;
    district: string;
    upazila: string;
    address: string;
  };
  Phone: string;
  paymentStatus: string;
  orderStatus: string;
  isPaid: boolean;
  isDelivered: boolean;
  isCanceled: boolean;
  isRefunded: boolean;
  isReturned: boolean;
  discontinued: boolean;
  isDeleted: boolean;
};

export type OrderProductType = {
  product: string;
  quantity: number;
  varient: string;
  total: number;
};
