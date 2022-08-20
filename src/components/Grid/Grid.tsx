import { ElementType, ReactNode } from "react";

import { SC_Grid } from "./Grid.styles";

export type GridProps = {
  columns?: number;
  gap?: number;
  as?: ElementType<any>;
  children: ReactNode;
};

export const Grid = ({
  columns = 2,
  gap = 20,
  as = "section",
  children,
}: GridProps) => {
  return (
    <SC_Grid columns={columns} gap={gap} as={as}>
      {children}
    </SC_Grid>
  );
};
