import { ReactNode } from "react";

import { SC_H1, SC_H2, SC_H3, SC_H4 } from "./Heading.styles";

export type HeaderVariants = "black";

export type HeadingProps = {
  lvl: "h1" | "h2" | "h3" | "h4";
  children: ReactNode;
  variant?: HeaderVariants;
};

export const Heading = ({ lvl, children, variant }: HeadingProps) => {
  switch (lvl) {
    case "h1":
      return <SC_H1 variant={variant}>{children}</SC_H1>;
    case "h2":
      return <SC_H2 variant={variant}>{children}</SC_H2>;
    case "h3":
      return <SC_H3 variant={variant}>{children}</SC_H3>;
    case "h4":
      return <SC_H4 variant={variant}>{children}</SC_H4>;
    default:
      return <SC_H2 variant={variant}>{children}</SC_H2>;
  }
};
