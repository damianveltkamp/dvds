import { Story } from "@storybook/react";

import { MainContainer } from "../MainContainer/MainContainer";
import { Paragraph, ParagraphProps } from "./Paragraph";

const storyConfig = {
  title: "Components/Paragraph",
  component: Paragraph,
  argTypes: {},
};

export const paragraph: Story<ParagraphProps> = () => {
  return (
    <MainContainer>
      <Paragraph>
        In these seven years, I have done four internships for three different
        companies where I worked full-time as a front-end developer and
        full-stack developer in a multi-disciplinary team. Now I am working as a
        full-time remote front-end developer.
      </Paragraph>
    </MainContainer>
  );
};

export default storyConfig;
