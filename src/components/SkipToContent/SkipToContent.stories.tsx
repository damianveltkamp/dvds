import { Story } from "@storybook/react";

import { SkipToContent, SkipToContentProps } from "./SkipToContent";

const storyConfig = {
  title: "Components/SkipToContent",
  component: SkipToContent,
  argTypes: {},
};

export const skipToContent: Story<SkipToContentProps> = () => {
  return <SkipToContent text="Skip to main content" skipId="#main" />;
};

export default storyConfig;
