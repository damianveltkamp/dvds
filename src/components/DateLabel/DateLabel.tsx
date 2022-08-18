import { ReactNode } from "react";

import { SC_DateLabel } from "./DateLabel.styles";

export type DateLabelProps = {
  children: ReactNode;
  dateTime: string;
};

export const DateLabel = ({ children, dateTime }: DateLabelProps) => {
  return <SC_DateLabel dateTime={dateTime}>{children}</SC_DateLabel>;
};
