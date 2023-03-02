import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="first name" source="firstName" />
        <TextInput label="last name" source="lastName" />
      </SimpleForm>
    </Edit>
  );
};
