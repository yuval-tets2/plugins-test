import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const TaskCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="NAme" source="nAme" />
        <DateTimeInput label="Date" source="date" />
      </SimpleForm>
    </Create>
  );
};
