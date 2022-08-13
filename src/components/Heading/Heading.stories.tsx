import { Story } from "@storybook/react";

import { Link } from "../Link/Link";
import { MainContainer } from "../MainContainer/MainContainer";
import { Heading, HeadingProps } from "./Heading";

const storyConfig = {
  title: "Components/Heading",
  component: Heading,
  argTypes: {},
};

export const h1: Story<HeadingProps> = () => {
  return (
    <MainContainer>
      <Heading lvl="h1">
        Heading level 1 <Link text="heey" href="www.google.nl" />
      </Heading>
    </MainContainer>
  );
};

export const h2: Story<HeadingProps> = () => {
  return (
    <MainContainer>
      <Heading lvl="h2">Heading level 2</Heading>
    </MainContainer>
  );
};

export const h3: Story<HeadingProps> = () => {
  return (
    <MainContainer>
      <Heading lvl="h3">Heading level 3</Heading>
    </MainContainer>
  );
};

export const h4: Story<HeadingProps> = () => {
  return (
    <MainContainer>
      <Heading lvl="h4">Heading level 4</Heading>
    </MainContainer>
  );
};

export default storyConfig;
