import { Story } from "@storybook/react";

import { Heading } from "../Heading/Heading";
import { MainContainer } from "../MainContainer/MainContainer";
import { Paragraph } from "../Paragraph/Paragraph";
import { ContentBlock, ContentBlockProps } from "./ContentBlock";
import { Image } from "../Image/Image";

export default {
  title: "Components/ContentBlock",
  component: ContentBlock,
  argTypes: {},
};

export const contentBlock: Story<ContentBlockProps> = () => {
  return (
    <MainContainer>
      <ContentBlock>
        <Heading lvl="h2">
          What I have learned after creating a design system
        </Heading>
        <Paragraph>
          Before publishing your new package version you would ideally test out
          the package locally, this is possible with the yarn link command. This
          command creates a symlink inside of your ~/.config/yarn/link directory
          on your machine to your local package that you can use inside your
          project to test locally without publishing.
        </Paragraph>
        <Image
          src="/images/maandag.png"
          alt="testing image"
          layout="fill"
          height={250}
        />
        <Paragraph>
          Before publishing your new package version you would ideally test out
          the package locally, this is possible with the yarn link command. This
          command creates a symlink inside of your ~/.config/yarn/link directory
          on your machine to your local package that you can use inside your
          project to test locally without publishing.
        </Paragraph>
      </ContentBlock>
      <ContentBlock>
        <Heading lvl="h2">Local package testing</Heading>
        <Paragraph>
          Before publishing your new package version you would ideally test out
          the package locally, this is possible with the yarn link command. This
          command creates a symlink inside of your ~/.config/yarn/link directory
          on your machine to your local package that you can use inside your
          project to test locally without publishing.
        </Paragraph>
        <Image
          src="/images/maandag.png"
          alt="testing image"
          layout="fill"
          height={250}
        />
      </ContentBlock>
    </MainContainer>
  );
};
