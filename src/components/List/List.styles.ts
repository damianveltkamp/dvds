import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { theme } from "../../theme/theme";

const listBase = css`
  padding-left: 20px;
  margin: 0;
  color: ${theme.colors.white};
`;

export const SC_OrderedList = styled("ol")`
  ${listBase}
`;
export const SC_UnorderedList = styled("ul")`
  ${listBase}
`;
