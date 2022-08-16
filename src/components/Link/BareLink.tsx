import NextLink from "next/link";
import { ReactNode } from "react";

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
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    <NextLink href={href} passHref={true}>
      <a className={className}>{children}</a>
    </NextLink>
  );
};
