import { Story } from "@storybook/react";

import { ArticleCard } from "../ArticleCard/ArticleCard";
import {
  ArticleCardContainer,
  ArticleCardContainerProps,
} from "../ArticleCardContainer/ArticleCardContainer";
import { MainContainer } from "../MainContainer/MainContainer";

const storyConfig = {
  title: "Components/ArticleCardContainer",
  component: ArticleCardContainer,
  argTypes: {},
};

export const articleCardContainer: Story<ArticleCardContainerProps> = () => {
  return (
    <MainContainer>
      <ArticleCardContainer columns={2}>
        <ArticleCard
          title="Creating a design system"
          excerpt="What it takes in order to create a design system"
          date="2022-08-14"
          dateTime="Sun Aug 14 2022 02:00:00 GMT+0200 (Central European Summer Time)"
          tags={["Typescript", "Rollup"]}
          slug="creating-a-design-system"
        />
        <ArticleCard
          title="Creating a design system"
          excerpt="What it takes in order to create a design system"
          date="2022-08-14"
          dateTime="Sun Aug 14 2022 02:00:00 GMT+0200 (Central European Summer Time)"
          tags={["Typescript", "Rollup"]}
          slug="creating-a-design-system"
        />
        <ArticleCard
          title="Creating a design system"
          excerpt="What it takes in order to create a design system"
          date="2022-08-14"
          dateTime="Sun Aug 14 2022 02:00:00 GMT+0200 (Central European Summer Time)"
          tags={["Typescript", "Rollup"]}
          slug="creating-a-design-system"
        />
      </ArticleCardContainer>
    </MainContainer>
  );
};

export default storyConfig;
