export interface Thing {
  uid: string;
  name: string;
  price: number;
  sex: "0" | "1" | "2";
  image: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  sizes: string[];
  brand: {
    name: string;
    uid: string;
  };
  category: {
    name: string;
    uid: string;
  };
  quantity?: number;
}
