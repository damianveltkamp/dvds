import { Story } from "@storybook/react";

import { Footer, FooterProps } from "./Footer";

export default {
  title: "Components/Footer",
  component: Footer,
  argTypes: {},
};

export const footer: Story<FooterProps> = () => {
  return <Footer />;
};
