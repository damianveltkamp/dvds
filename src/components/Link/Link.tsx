import NextLink from "next/link";

import { SC_Link } from "./Link.styles";

export type LinkProps = {
  text: string;
  href: string;
  isExternal?: boolean;
};

export const Link = ({ text, href, isExternal = false }: LinkProps) => {
  return isExternal ? (
    <SC_Link href={href} target="_blank" rel="noreferrer">
      {text}
    </SC_Link>
  ) : (
    <NextLink href={href} passHref={true}>
      <SC_Link>{text}</SC_Link>
    </NextLink>
  );
};
