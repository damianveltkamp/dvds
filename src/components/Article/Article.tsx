import { ReactNode } from "react";

export type ArticleProps = {
  children: ReactNode;
};

export const Article = ({ children }: ArticleProps) => {
  return <article>{children}</article>;
};
