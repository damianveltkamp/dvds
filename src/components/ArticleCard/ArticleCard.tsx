import { DateLabel } from "../DateLabel/DateLabel";
import { Heading } from "../Heading/Heading";
import {
  SC_ArticleCardContainer,
  SC_ArticleExcerpt,
  SC_ArticleFooter,
  SC_ArticleTag,
  SC_ArticleTagsContainer,
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
    <SC_ArticleCardContainer href={slug}>
      <Heading lvl="h2" variant="DVBlue">
        {title}
      </Heading>
      <DateLabel variant="black" dateTime={dateTime}>
        {date}
      </DateLabel>
      <SC_ArticleExcerpt lvl="h3" variant="DVBlue">
        {excerpt}
      </SC_ArticleExcerpt>
      <SC_ArticleFooter>
        <SC_ArticleTagsContainer>
          {tags.map((tag) => (
            <SC_ArticleTag key={tag}>{tag}</SC_ArticleTag>
          ))}
        </SC_ArticleTagsContainer>
      </SC_ArticleFooter>
    </SC_ArticleCardContainer>
  );
};
