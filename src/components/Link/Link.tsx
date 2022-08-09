import NextLink from "next/link";

import { SC_NextLink } from "./Link.styles";

export type LinkProps = {
  text: string;
  href: string;
  isExternal?: boolean;
};

export const Link = ({ text, href, isExternal = false }: LinkProps) => {
  return isExternal ? (
    <SC_NextLink href={href}>{text}</SC_NextLink>
  ) : (
    <NextLink href={href} passHref={true}>
      <SC_NextLink>{text}</SC_NextLink>
    </NextLink>
  );
};
