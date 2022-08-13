import { ReactNode } from "react";

import { SC_Paragraph } from "./Paragraph.styles";

export type ParagraphProps = {
  children: ReactNode;
  variant?: "black";
};

export const Paragraph = ({ children, variant }: ParagraphProps) => {
  return <SC_Paragraph variant={variant}>{children}</SC_Paragraph>;
};
