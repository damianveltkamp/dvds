import NextLink from "next/link";

import { SC_NextLink } from "./Link.styles";

export type LinkProps = {
  text: string;
  href: string;
};

export const Link = ({ text, href }: LinkProps) => {
  return (
    <NextLink href={href} passHref={true}>
      <SC_NextLink>{text}</SC_NextLink>
    </NextLink>
  );
};
