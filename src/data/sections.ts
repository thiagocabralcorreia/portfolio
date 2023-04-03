import { enHeaderData, ptHeaderData } from "./header";

export interface SectionSchema {
  id: number;
  value: string;
  section: string;
}

export const enSections = [
  { id: 1, value: "home", section: enHeaderData.home },
  { id: 2, value: "about", section: enHeaderData.about },
  { id: 3, value: "projects", section: enHeaderData.projects },
  { id: 4, value: "recommendations", section: enHeaderData.recommendations },
  { id: 5, value: "contact", section: enHeaderData.contact },
];

export const ptSections = [
  { id: 1, value: "home", section: ptHeaderData.home },
  { id: 2, value: "about", section: ptHeaderData.about },
  { id: 3, value: "projects", section: ptHeaderData.projects },
  { id: 4, value: "recommendations", section: ptHeaderData.recommendations },
  { id: 5, value: "contact", section: ptHeaderData.contact },
];
