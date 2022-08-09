import { SC_ListItem } from "./ListItem.styles";

export type ListItemProps = {
  children: string;
};

export const ListItem = ({ children }: ListItemProps) => {
  return <SC_ListItem>{children}</SC_ListItem>;
};
