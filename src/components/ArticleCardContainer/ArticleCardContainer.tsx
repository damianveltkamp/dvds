import { ReactNode } from "react";

import { SC_ArticleCardContainer } from "./ArticleCardContainer.styles";

export type ArticleCardContainerProps = {
  children: ReactNode;
  columns?: number;
};

export const ArticleCardContainer = ({
  children,
  columns = 1,
}: ArticleCardContainerProps) => {
  return (
    <SC_ArticleCardContainer columns={columns}>
      {children}
    </SC_ArticleCardContainer>
  );
};
