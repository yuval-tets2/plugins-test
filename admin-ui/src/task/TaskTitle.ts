import { Task as TTask } from "../api/task/Task";

export const TASK_TITLE_FIELD = "nAme";

export const TaskTitle = (record: TTask): string => {
  return record.nAme || String(record.id);
};
