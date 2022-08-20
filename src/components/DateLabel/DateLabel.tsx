import { ReactNode } from "react";

import { SC_DateLabel } from "./DateLabel.styles";

export type DateLabelVariants = "white" | "black" | undefined;

export type DateLabelProps = {
  variant?: DateLabelVariants;
  children: ReactNode;
  dateTime: string;
};

export const DateLabel = ({ variant, children, dateTime }: DateLabelProps) => {
  return (
    <SC_DateLabel variant={variant} dateTime={dateTime}>
      {children}
    </SC_DateLabel>
  );
};
