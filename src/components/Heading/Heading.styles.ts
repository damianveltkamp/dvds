import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { theme } from "../../theme/theme";
import { HeaderVariants } from "./Heading";

const headingBase = css`
  margin: 0;
  color: ${theme.colors.white};
`;

type SC_HeadingProps = {
  variant?: HeaderVariants;
};

export const SC_H1 = styled("h1")<SC_HeadingProps>`
  ${headingBase}
  font-family:${({ theme }) => `${theme.typography.heading.h1.fontFamily}`};
  font-size: ${({ theme }) => `${theme.typography.heading.h1.fontSize}`};
  line-height: ${({ theme }) => `${theme.typography.heading.h1.lineHeight}`};
  color: ${({ theme, variant }) =>
    variant === "black" ? `${theme.colors.black}` : `${theme.colors.white}`};

  > a {
    font-family: ${({ theme }) => `${theme.typography.heading.h1.fontFamily}`};
    font-size: ${({ theme }) => `${theme.typography.heading.h1.fontSize}`};
    line-height: ${({ theme }) => `${theme.typography.heading.h1.lineHeight}`};
  }
`;

export const SC_H2 = styled("h2")<SC_HeadingProps>`
  ${headingBase}
  font-family:${({ theme }) => `${theme.typography.heading.h2.fontFamily}`};
  font-size: ${({ theme }) => `${theme.typography.heading.h2.fontSize}`};
  line-height: ${({ theme }) => `${theme.typography.heading.h2.lineHeight}`};
  color: ${({ theme, variant }) =>
    variant === "black" ? `${theme.colors.black}` : `${theme.colors.white}`};

  > a {
    font-family: ${({ theme }) => `${theme.typography.heading.h2.fontFamily}`};
    font-size: ${({ theme }) => `${theme.typography.heading.h2.fontSize}`};
    line-height: ${({ theme }) => `${theme.typography.heading.h2.lineHeight}`};
  }
`;

export const SC_H3 = styled("h3")<SC_HeadingProps>`
  ${headingBase}
  font-family:${({ theme }) => `${theme.typography.heading.h3.fontFamily}`};
  font-size: ${({ theme }) => `${theme.typography.heading.h3.fontSize}`};
  line-height: ${({ theme }) => `${theme.typography.heading.h3.lineHeight}`};
  color: ${({ theme, variant }) =>
    variant === "black" ? `${theme.colors.black}` : `${theme.colors.white}`};

  > a {
    font-family: ${({ theme }) => `${theme.typography.heading.h3.fontFamily}`};
    font-size: ${({ theme }) => `${theme.typography.heading.h3.fontSize}`};
    line-height: ${({ theme }) => `${theme.typography.heading.h3.lineHeight}`};
  }
`;

export const SC_H4 = styled("h4")<SC_HeadingProps>`
  ${headingBase}
  font-family:${({ theme }) => `${theme.typography.heading.h4.fontFamily}`};
  font-size: ${({ theme }) => `${theme.typography.heading.h4.fontSize}`};
  line-height: ${({ theme }) => `${theme.typography.heading.h4.lineHeight}`};
  color: ${({ theme, variant }) =>
    variant === "black" ? `${theme.colors.black}` : `${theme.colors.white}`};

  > a {
    font-family: ${({ theme }) => `${theme.typography.heading.h4.fontFamily}`};
    font-size: ${({ theme }) => `${theme.typography.heading.h4.fontSize}`};
    line-height: ${({ theme }) => `${theme.typography.heading.h4.lineHeight}`};
  }
`;
