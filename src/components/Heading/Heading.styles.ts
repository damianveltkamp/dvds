import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { theme } from "../../theme/theme";

const headingBase = css`
  margin: 0;
  color: ${theme.colors.white};
`;

export const SC_H1 = styled("h1")`
  ${headingBase}
  font-family:${({ theme }) => `${theme.typography.heading.h1.fontFamily}`};
  font-size: ${({ theme }) => `${theme.typography.heading.h1.fontSize}`};
  line-height: ${({ theme }) => `${theme.typography.heading.h1.lineHeight}`}; ;
`;

export const SC_H2 = styled("h2")`
  ${headingBase}
  font-family:${({ theme }) => `${theme.typography.heading.h2.fontFamily}`};
  font-size: ${({ theme }) => `${theme.typography.heading.h2.fontSize}`};
  line-height: ${({ theme }) => `${theme.typography.heading.h2.lineHeight}`}; ;
`;

export const SC_H3 = styled("h3")`
  ${headingBase}
  font-family:${({ theme }) => `${theme.typography.heading.h3.fontFamily}`};
  font-size: ${({ theme }) => `${theme.typography.heading.h3.fontSize}`};
  line-height: ${({ theme }) => `${theme.typography.heading.h3.lineHeight}`}; ;
`;

export const SC_H4 = styled("h4")`
  ${headingBase}
  font-family:${({ theme }) => `${theme.typography.heading.h4.fontFamily}`};
  font-size: ${({ theme }) => `${theme.typography.heading.h4.fontSize}`};
  line-height: ${({ theme }) => `${theme.typography.heading.h4.lineHeight}`}; ;
`;
