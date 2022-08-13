import { Story } from "@storybook/react";

import GithubBrandsIcon from "../components/GithubBrands";

const theme = {
  colors: {
    foo: "bar",
  },
};
const storyConfig = {
  title: "Icons/GithubBrandsIcon",
  component: GithubBrandsIcon,
  argTypes: {},
};

export const githubBrandsIcon: Story = () => {
  return <GithubBrandsIcon size={50} />;
};

export default storyConfig;
