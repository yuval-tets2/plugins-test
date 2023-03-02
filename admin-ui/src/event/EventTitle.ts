import { Event as TEvent } from "../api/event/Event";

export const EVENT_TITLE_FIELD = "firstName";

export const EventTitle = (record: TEvent): string => {
  return record.firstName || String(record.id);
};
