import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PurchaseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Purchases"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Customer" source="customer" />
        <TextField label="ID" source="id" />
        <TextField label="Product" source="product" />
        <TextField label="purchaseDate" source="purchaseDate" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
