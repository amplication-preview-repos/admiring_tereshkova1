export type Purchase = {
  amount: number | null;
  createdAt: Date;
  customer: string | null;
  id: string;
  product: string | null;
  purchaseDate: Date | null;
  updatedAt: Date;
};
