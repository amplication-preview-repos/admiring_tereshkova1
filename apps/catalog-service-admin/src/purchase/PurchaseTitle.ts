import { Purchase as TPurchase } from "../api/purchase/Purchase";

export const PURCHASE_TITLE_FIELD = "customer";

export const PurchaseTitle = (record: TPurchase): string => {
  return record.customer?.toString() || String(record.id);
};
