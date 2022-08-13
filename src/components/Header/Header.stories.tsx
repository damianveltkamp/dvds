import { Story } from "@storybook/react";

import { Header, HeaderProps } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {},
};

export const link: Story<HeaderProps> = () => {
  return <Header />;
};
