import styled from "@emotion/styled";

export const SC_ArticleCardContainer = styled("a")`
  display: block;
  background: ${({ theme }) => `${theme.colors.DVOrange}`};
  padding: 40px;
  color: ${({ theme }) => `${theme.colors.white}`};
  border-radius: 10px;
  color: ${({ theme }) => `${theme.colors.DVBlue}`}; ;
`;

export const SC_ArticleTitle = styled("h2")``;

export const SC_ArticleExcerpt = styled("h3")`
  font-size: 1rem;
  margin-bottom: 20px;
`;

export const SC_ArticleFooter = styled("div")`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const SC_ArticleDate = styled("time")`
  display: flex;
  align-items: center;
  font-weight: 500;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const SC_ArticleTagsContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const SC_ArticleTag = styled("div")`
  width: fit-content;
  padding: 8px;
  background: ${({ theme }) => `${theme.colors.DVBlue}`};
  font-size: 13px;
  color: ${({ theme }) => `${theme.colors.white}`};
  border-radius: 10px;
`;
