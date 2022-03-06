export interface Item {
  id: number;
  title: string;
  price: number;
  type: string;
  sex: string;
  brand: string;
  color: string;
  sizes: any;
  img_small: string;
  img_big: string;
  createdAt: Date;
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  type: string;
  sex: string;
  brand: string;
  color: string;
  sizes: any;
  img_small: string;
  img_big: string;
  createdAt: Date;
  quantity: number;
  cartId: number;
}
