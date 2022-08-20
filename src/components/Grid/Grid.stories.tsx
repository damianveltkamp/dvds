import { Story } from "@storybook/react";

import { Grid, GridProps } from "./Grid";

const storyConfig = {
  title: "Components/Grid",
  component: Grid,
  argTypes: {},
};

export const grid: Story<GridProps> = () => {
  return (
    <Grid columns={2}>
      <div>Column</div>
      <div>Column</div>
    </Grid>
  );
};

export default storyConfig;
