import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PurchaseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="Customer" source="customer" />
        <TextInput label="Product" source="product" />
        <DateTimeInput label="purchaseDate" source="purchaseDate" />
      </SimpleForm>
    </Edit>
  );
};
