import { BareLink } from "../Link/BareLink";
import {
  SC_ArticleCardContainer,
  SC_ArticleDate,
  SC_ArticleExcerpt,
  SC_ArticleFooter,
  SC_ArticleTag,
  SC_ArticleTagsContainer,
  SC_ArticleTitle,
} from "./ArticleCard.styles";

export type ArticleCardProps = {
  title: string;
  excerpt: string;
  date: string;
  dateTime: string;
  tags: string[];
  slug: string;
};

export const ArticleCard = ({
  title,
  excerpt,
  date,
  dateTime,
  tags,
  slug,
}: ArticleCardProps) => {
  return (
    <BareLink href={`${slug}`}>
      <SC_ArticleCardContainer>
        <SC_ArticleTitle>{title}</SC_ArticleTitle>
        <SC_ArticleDate dateTime={dateTime}>{date}</SC_ArticleDate>
        <SC_ArticleExcerpt>{excerpt}</SC_ArticleExcerpt>
        <SC_ArticleFooter>
          <SC_ArticleTagsContainer>
            {tags.map((tag) => (
              <SC_ArticleTag key={tag}>{tag}</SC_ArticleTag>
            ))}
          </SC_ArticleTagsContainer>
        </SC_ArticleFooter>
      </SC_ArticleCardContainer>
    </BareLink>
  );
};
