import { Story } from "@storybook/react";

import { Link, LinkProps } from "./Link";

const storyConfig = {
  title: "Components/Link",
  component: Link,
  argTypes: {},
};

export const link: Story<LinkProps> = () => {
  return <Link text="Click me" href="www.google.com" />;
};

export default storyConfig;
