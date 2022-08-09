import { ReactNode } from "react";

import { SC_Paragraph } from "./Paragraph.styles";

export type ParagraphProps = {
  children: ReactNode;
};

export const Paragraph = ({ children }: ParagraphProps) => {
  return <SC_Paragraph>{children}</SC_Paragraph>;
};
