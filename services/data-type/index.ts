export interface CategoryTypes {
  _id: string;
  name: string;
}

export interface GameItemTypes {
  _id: string;
  status: string;
  name: string;
  thumbnail: string;
  category: CategoryTypes;
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
export interface HistoryVoucherTopupTypes {
  category: string;
  coinName: string;
  coinQuantity: string;
  gameName: string;
  price: number;
  thumbnail: string;
}

export interface HistoryPaymentTypes {
  bankName: string;
  name: string;
  noRekening: string;
  type: string;
}

export interface TopUpCategoriesTypes {
  _id: string;
  value: number;
  name: string;
}

export interface HistoryTransactionTypes {
  _id: string;
  historyVoucherTopup: HistoryVoucherTopupTypes;
  value: number;
  status: string;
  accountUser: string;
  tax: number;
  name: string;
  historyPayment: HistoryPaymentTypes;
}

export interface ArticleItemTypes {
  _id: string;
  judul: string;
  excrept: string;
  image: string;
  body: string;
}
