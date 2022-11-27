export interface Item {
  uid: string;
  name: string;
  price: number;
  type: string;
  sex: string;
  brand: {
    uid: string;
    name: string;
  };
  color: string;
  sizes: any;
  image: string;
  createdAt: Date;
  quantity?: number;
}
