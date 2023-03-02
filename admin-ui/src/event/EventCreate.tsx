import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const EventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="first name" source="firstName" />
        <TextInput label="last name" source="lastName" />
      </SimpleForm>
    </Create>
  );
};
