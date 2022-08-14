import { Story } from "@storybook/react";

import Logo from "../components/Logo";

const storyConfig = {
  title: "Icons/Logo",
  component: Logo,
  argTypes: {},
};

export const logo: Story = () => {
  return <Logo size={50} color="white" />;
};

export default storyConfig;
