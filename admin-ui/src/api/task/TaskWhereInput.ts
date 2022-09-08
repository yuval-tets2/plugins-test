import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TaskWhereInput = {
  id?: StringFilter;
  nAme?: StringNullableFilter;
  date?: DateTimeNullableFilter;
};
