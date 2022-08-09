import { ListItem } from "../ListItem/ListItem";
import { SC_OrderedList, SC_UnorderedList } from "./List.styles";

export type ListProps = {
  isOrdered?: boolean;
  items: string[];
};

export const List = ({ isOrdered = false, items }: ListProps) => {
  return isOrdered === true ? (
    <SC_OrderedList>
      {items.map((item, key) => (
        <ListItem key={key}>{item}</ListItem>
      ))}
    </SC_OrderedList>
  ) : (
    <SC_UnorderedList>
      {items.map((item, key) => (
        <ListItem key={key}>{item}</ListItem>
      ))}
    </SC_UnorderedList>
  );
};
