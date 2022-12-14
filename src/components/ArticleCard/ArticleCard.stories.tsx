import { Story } from "@storybook/react";

import { MainContainer } from "../MainContainer/MainContainer";
import { ArticleCard, ArticleCardProps } from "./ArticleCard";

const storyConfig = {
  title: "Components/ArticleCard",
  component: ArticleCard,
  argTypes: {},
};

export const articleCard: Story<ArticleCardProps> = () => {
  return (
    <MainContainer>
      <ArticleCard
        title="Creating a design system"
        excerpt="What it takes in order to create a design system"
        date="2022-08-14"
        dateTime="Sun Aug 14 2022 02:00:00 GMT+0200 (Central European Summer Time)"
        tags={["Typescript", "Rollup"]}
        slug="creating-a-design-system"
      />
    </MainContainer>
  );
};

export default storyConfig;
