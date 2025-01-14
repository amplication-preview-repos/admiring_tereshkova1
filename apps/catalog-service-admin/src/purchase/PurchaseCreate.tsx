import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PurchaseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="Customer" source="customer" />
        <TextInput label="Product" source="product" />
        <DateTimeInput label="purchaseDate" source="purchaseDate" />
      </SimpleForm>
    </Create>
  );
};
