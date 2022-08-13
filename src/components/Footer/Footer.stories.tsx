import { Story } from "@storybook/react";

import { Footer, FooterProps } from "./Footer";

const storyConfig = {
  title: "Components/Footer",
  component: Footer,
  argTypes: {},
};

export const footer: Story<FooterProps> = () => {
  return <Footer />;
};

export default storyConfig;
