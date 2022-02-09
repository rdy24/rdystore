export interface CategoryTypes {
  _id: string;
  name: string;
}

export interface GameItemTypes {
  _id: string;
  name: string;
  thumbnail: string;
}

export interface NominalItemTypes {
  _id: string;
  coinName: string;
  coinQuantity: string;
  price: number;
}

export interface BanksTypes {
  _id: string;
  name: string;
  bankName: string;
  noRekening: string;
}

export interface PaymentItemTypes {
  _id: string;
  type: string;
  status: string;
  banks: BanksTypes[];
}

export interface LoginTypes {
  email: string;
  password: string;
}

export interface UserTypes {
  id: string;
  email: string;
  name: string;
  avatar: string;
}
export interface JWTPayloadTypes {
  player: UserTypes;
  iat: number;
}

export interface CheckoutTypes {
  voucher: string;
  nominal: string;
  payment: string;
  bank: string;
  name: string;
  accountUser: string;
}

export interface ArticleItemTypes {
  _id: string;
  judul: string;
  excrept: string;
  image: string;
}
