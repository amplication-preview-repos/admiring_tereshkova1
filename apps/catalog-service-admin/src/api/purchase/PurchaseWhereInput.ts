import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PurchaseWhereInput = {
  amount?: FloatNullableFilter;
  customer?: StringNullableFilter;
  id?: StringFilter;
  product?: StringNullableFilter;
  purchaseDate?: DateTimeNullableFilter;
};
