import { Story } from "@storybook/react";

import { List, ListProps } from "./List";

export default {
  title: "Components/List",
  component: List,
  argTypes: {},
};

export const unorderedList: Story<ListProps> = () => {
  return <List items={["Item 1", "item 2"]} />;
};

export const orderedList: Story<ListProps> = () => {
  return <List isOrdered={true} items={["Item 1", "item 2"]} />;
};
