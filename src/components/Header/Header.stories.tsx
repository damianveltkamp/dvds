import { Story } from "@storybook/react";

import { Header, HeaderProps } from "./Header";

const storyConfig = {
  title: "Components/Header",
  component: Header,
  argTypes: {},
};

export const header: Story<HeaderProps> = () => {
  return <Header />;
};

export default storyConfig;
