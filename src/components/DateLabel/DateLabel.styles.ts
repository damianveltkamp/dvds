import styled from "@emotion/styled";

import { TypeofTheme } from "../../theme/theme";
import { DateLabelProps, DateLabelVariants } from "./DateLabel";

type SC_DateLabelProps = Pick<DateLabelProps, "variant">;

const colorVariant = (variant: DateLabelVariants, theme: TypeofTheme) => {
  switch (variant) {
    case "white":
      return theme.colors.white;
    case "black":
      return theme.colors.black;
    default:
      return theme.colors.white;
  }
};

export const SC_DateLabel = styled("time")<SC_DateLabelProps>`
  display: block;
  font-family: ${({ theme }) => `${theme.typography.time.fontFamily}`};
  font-size: ${({ theme }) => `${theme.typography.time.fontSize}`};
  line-height: ${({ theme }) => `${theme.typography.time.lineHeight}`};
  color: ${({ variant, theme }) => colorVariant(variant, theme)};

  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;
