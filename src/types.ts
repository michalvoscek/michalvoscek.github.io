export type Product = {
  code: string;
  name: string;
  weightInGrams: number;
  maxPrice: number;
  image: string;
};

export type Category = {
  name: string;
  weightLimitInGrams: number;
  items: Product[];
  rowClassName: string;
};
