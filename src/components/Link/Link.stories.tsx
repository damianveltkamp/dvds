import { Story } from "@storybook/react";

import { Link, LinkProps } from "./Link";

export default {
  title: "Components/Link",
  component: Link,
  argTypes: {},
};

export const example: Story<LinkProps> = () => {
  return <Link text="Click me" href="www.google.com" />;
};
