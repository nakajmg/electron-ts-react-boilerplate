import {EventMenuType} from "../src/constants/eventMenuColors"

export interface ZoomInfo {
  link: string;
  name: string;
}

export interface GaroonEvent {
  id: string;
  subject: string;
  notes: string;
  start: {
    dateTime: string;
  };
  end: {
    dateTime: string
  };
  attendees: {
    id: string,
    name: string,
    code: string
  }[];
  facilities: {
    id: string;
    name: string;
    code: string;
  }[];
  eventType?: string;
  eventMenu?: EventMenuType;
  isAllDay?: boolean;
  zoomUrls?: ZoomInfo[];
  hasNotified?: boolean;
}

export interface KintoneRecord {
  Meeting_Room: {
    value: string
  };
  AccessURL: {
    value: string
  }
}
