import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { theme, TypeofTheme } from "../../theme/theme";
import media from "../../utils/media";
import { HeadingProps, HeadingVariants } from "./Heading";

type SC_HeadingProps = Pick<HeadingProps, "variant">;

const headingBase = css`
  margin: 0;
  color: ${theme.colors.white};
`;

const colorVariant = (variant: HeadingVariants, theme: TypeofTheme) => {
  switch (variant) {
    case "black":
      return theme.colors.black;
    case "DVBlue":
      return theme.colors.black;
    default:
      return theme.colors.white;
  }
};

export const SC_H1 = styled("h1")<SC_HeadingProps>`
  ${headingBase}
  font-family:${({ theme }) =>
    `${theme.typography.heading.mobile.h1.fontFamily}`};
  font-size: ${({ theme }) => `${theme.typography.heading.mobile.h1.fontSize}`};
  line-height: ${({ theme }) =>
    `${theme.typography.heading.mobile.h1.lineHeight}`};
  color: ${({ variant, theme }) => colorVariant(variant, theme)};

  > a {
    color: red;
    font-family: ${({ theme }) =>
      `${theme.typography.heading.mobile.h1.fontFamily}`};
    font-size: ${({ theme }) =>
      `${theme.typography.heading.mobile.h1.fontSize}`};
    line-height: ${({ theme }) =>
      `${theme.typography.heading.mobile.h1.lineHeight}`};
  }

  ${media.min("tablet")} {
    font-family: ${({ theme }) =>
      `${theme.typography.heading.desktop.h1.fontFamily}`};
    font-size: ${({ theme }) =>
      `${theme.typography.heading.desktop.h1.fontSize}`};
    line-height: ${({ theme }) =>
      `${theme.typography.heading.desktop.h1.lineHeight}`};

    > a {
      color: blue;
      font-family: ${({ theme }) =>
        `${theme.typography.heading.desktop.h1.fontFamily}`};
      font-size: ${({ theme }) =>
        `${theme.typography.heading.desktop.h1.fontSize}`};
      line-height: ${({ theme }) =>
        `${theme.typography.heading.desktop.h1.lineHeight}`};
    }
  }
`;

export const SC_H2 = styled("h2")<SC_HeadingProps>`
  ${headingBase}
  font-family:${({ theme }) =>
    `${theme.typography.heading.mobile.h2.fontFamily}`};
  font-size: ${({ theme }) => `${theme.typography.heading.mobile.h2.fontSize}`};
  line-height: ${({ theme }) =>
    `${theme.typography.heading.mobile.h2.lineHeight}`};
  color: ${({ variant, theme }) => colorVariant(variant, theme)};

  > a {
    font-family: ${({ theme }) =>
      `${theme.typography.heading.mobile.h2.fontFamily}`};
    font-size: ${({ theme }) =>
      `${theme.typography.heading.mobile.h2.fontSize}`};
    line-height: ${({ theme }) =>
      `${theme.typography.heading.mobile.h2.lineHeight}`};
  }

  ${media.min("tablet")} {
    font-family: ${({ theme }) =>
      `${theme.typography.heading.desktop.h2.fontFamily}`};
    font-size: ${({ theme }) =>
      `${theme.typography.heading.desktop.h2.fontSize}`};
    line-height: ${({ theme }) =>
      `${theme.typography.heading.desktop.h2.lineHeight}`};

    > a {
      font-family: ${({ theme }) =>
        `${theme.typography.heading.desktop.h2.fontFamily}`};
      font-size: ${({ theme }) =>
        `${theme.typography.heading.desktop.h2.fontSize}`};
      line-height: ${({ theme }) =>
        `${theme.typography.heading.desktop.h2.lineHeight}`};
    }
  }
`;

export const SC_H3 = styled("h3")<SC_HeadingProps>`
  ${headingBase}
  font-family:${({ theme }) =>
    `${theme.typography.heading.mobile.h3.fontFamily}`};
  font-size: ${({ theme }) => `${theme.typography.heading.mobile.h3.fontSize}`};
  line-height: ${({ theme }) =>
    `${theme.typography.heading.mobile.h3.lineHeight}`};
  color: ${({ variant, theme }) => colorVariant(variant, theme)};

  > a {
    font-family: ${({ theme }) =>
      `${theme.typography.heading.mobile.h3.fontFamily}`};
    font-size: ${({ theme }) =>
      `${theme.typography.heading.mobile.h3.fontSize}`};
    line-height: ${({ theme }) =>
      `${theme.typography.heading.mobile.h3.lineHeight}`};
  }

  ${media.min("tablet")} {
    font-family: ${({ theme }) =>
      `${theme.typography.heading.desktop.h3.fontFamily}`};
    font-size: ${({ theme }) =>
      `${theme.typography.heading.desktop.h3.fontSize}`};
    line-height: ${({ theme }) =>
      `${theme.typography.heading.desktop.h3.lineHeight}`};

    > a {
      font-family: ${({ theme }) =>
        `${theme.typography.heading.desktop.h3.fontFamily}`};
      font-size: ${({ theme }) =>
        `${theme.typography.heading.desktop.h3.fontSize}`};
      line-height: ${({ theme }) =>
        `${theme.typography.heading.desktop.h3.lineHeight}`};
    }
  }
`;

export const SC_H4 = styled("h4")<SC_HeadingProps>`
  ${headingBase}
  font-family:${({ theme }) =>
    `${theme.typography.heading.mobile.h4.fontFamily}`};
  font-size: ${({ theme }) => `${theme.typography.heading.mobile.h4.fontSize}`};
  line-height: ${({ theme }) =>
    `${theme.typography.heading.mobile.h4.lineHeight}`};
  color: ${({ variant, theme }) => colorVariant(variant, theme)};

  > a {
    font-family: ${({ theme }) =>
      `${theme.typography.heading.mobile.h4.fontFamily}`};
    font-size: ${({ theme }) =>
      `${theme.typography.heading.mobile.h4.fontSize}`};
    line-height: ${({ theme }) =>
      `${theme.typography.heading.mobile.h4.lineHeight}`};
  }

  ${media.min("tablet")} {
    font-family: ${({ theme }) =>
      `${theme.typography.heading.desktop.h4.fontFamily}`};
    font-size: ${({ theme }) =>
      `${theme.typography.heading.desktop.h4.fontSize}`};
    line-height: ${({ theme }) =>
      `${theme.typography.heading.desktop.h4.lineHeight}`};

    > a {
      font-family: ${({ theme }) =>
        `${theme.typography.heading.desktop.h4.fontFamily}`};
      font-size: ${({ theme }) =>
        `${theme.typography.heading.desktop.h4.fontSize}`};
      line-height: ${({ theme }) =>
        `${theme.typography.heading.desktop.h4.lineHeight}`};
    }
  }
`;
