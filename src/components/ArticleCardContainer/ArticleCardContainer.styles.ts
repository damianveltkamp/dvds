import styled from "@emotion/styled";

import { ArticleCardContainerProps } from "./ArticleCardContainer";

type SC_ArticleCardContainerProps = Pick<ArticleCardContainerProps, "columns">;

export const SC_ArticleCardContainer = styled(
  "section"
)<SC_ArticleCardContainerProps>`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  grid-gap: 20px;
`;
