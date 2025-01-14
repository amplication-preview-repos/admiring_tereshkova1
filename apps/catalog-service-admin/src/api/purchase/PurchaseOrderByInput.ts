import { SortOrder } from "../../util/SortOrder";

export type PurchaseOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  customer?: SortOrder;
  id?: SortOrder;
  product?: SortOrder;
  purchaseDate?: SortOrder;
  updatedAt?: SortOrder;
};
