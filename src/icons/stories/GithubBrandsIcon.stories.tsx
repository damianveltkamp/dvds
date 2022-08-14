import { Story } from "@storybook/react";

import GithubBrandsIcon from "../components/GithubBrands";

const storyConfig = {
  title: "Icons/GithubBrandsIcon",
  component: GithubBrandsIcon,
  argTypes: {},
};

export const githubBrandsIcon: Story = () => {
  return <GithubBrandsIcon size={50} color="white" />;
};

export default storyConfig;
