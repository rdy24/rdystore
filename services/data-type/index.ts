export interface GameItemTypes {
  _id: string;
  product: {
    _id: string;
    game: string;
    icon: string;
  };
}

export interface ArticleItemTypes {
  _id: string;
  judul: string;
  excrept: string;
  image: string;
}
