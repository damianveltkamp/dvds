import { ReactNode } from "react";

import { SC_ContentBlock } from "./ContentBlock.styles";

export type ContentBlockProps = { children: ReactNode };

export const ContentBlock = ({ children }: ContentBlockProps) => {
  return <SC_ContentBlock>{children}</SC_ContentBlock>;
};
