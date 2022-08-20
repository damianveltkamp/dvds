import styled from "@emotion/styled";

import { GridProps } from "./Grid";

type SC_GridProps = Pick<GridProps, "columns" | "gap">;

export const SC_Grid = styled("section")<SC_GridProps>`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  grid-gap: ${({ gap }) => `${gap}px`}; ;
`;
