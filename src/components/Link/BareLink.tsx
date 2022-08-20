import NextLink from "next/link";
import { ReactNode } from "react";

import { SC_BareLink } from "./Link.styles";

export type BareLinkProps = {
  href: string;
  children: ReactNode;
  isExternal?: boolean;
  className?: string;
};

export const BareLink = ({
  href,
  children,
  isExternal,
  className,
}: BareLinkProps) => {
  return isExternal ? (
    <SC_BareLink
      href={href}
      className={className}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </SC_BareLink>
  ) : (
    <NextLink href={href} passHref={true} className={className}>
      <SC_BareLink className={className}>{children}</SC_BareLink>
    </NextLink>
  );
};
