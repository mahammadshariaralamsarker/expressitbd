export type TValues = {
  category: string;
  country:string;
  currency: string;
  domain: string;
  email: string;
  name: string;
};

export interface IProduct {
  _id: string;
  name: string;
  category: {
    name: string;
    _id: string;
  };
  createdAt: string;
  updatedAt: string;
  description: string;
  price: string;
  status: boolean;
  images?: {
    public_id: string;
    secure_url: string;
    optimizeUrl?: string;
  }[];
  video?: {
    public_id: string;
    secure_url: string;
  };
  __v: number;
}