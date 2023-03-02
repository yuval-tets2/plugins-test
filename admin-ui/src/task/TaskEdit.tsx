import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const TaskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="NAme" source="nAme" />
        <DateTimeInput label="Date" source="date" />
      </SimpleForm>
    </Edit>
  );
};
