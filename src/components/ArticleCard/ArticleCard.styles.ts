import styled from "@emotion/styled";
import media from "../../utils/media";
import { Heading } from "../Heading/Heading";
import { BareLink } from "../Link/BareLink";

export const SC_ArticleCardContainer = styled(BareLink)`
  display: block;
  background: ${({ theme }) => `${theme.colors.DVOrange}`};
  padding-block: 25px;
  padding-inline: 40px;
  color: ${({ theme }) => `${theme.colors.white}`};
  border-radius: 10px;
  color: ${({ theme }) => `${theme.colors.DVBlue}`};
  text-decoration: none;

  ${media.min("tablet")} {
    padding: 40px;
  }
`;

export const SC_ArticleExcerpt = styled(Heading)`
  & {
    font-size: 1rem;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

export const SC_ArticleFooter = styled("div")`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const SC_ArticleDate = styled("time")`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => `${theme.typography.time.fontFamily}`};
  font-size: ${({ theme }) => `${theme.typography.time.fontSize}`};
  line-height: ${({ theme }) => `${theme.typography.time.lineHeight}`};

  &:not(:last-child) {
    margin-bottom: 25px;
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
  font-family: ${({ theme }) => `${theme.typography.tag.fontFamily}`};
  font-size: ${({ theme }) => `${theme.typography.tag.fontSize}`};
  line-height: ${({ theme }) => `${theme.typography.tag.lineHeight}`};
  color: ${({ theme }) => `${theme.colors.white}`};
  border-radius: 10px;
`;
