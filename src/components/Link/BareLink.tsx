import NextLink from "next/link";
import { ReactNode } from "react";

export type BareLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export const BareLink = ({ href, children, className }: BareLinkProps) => {
  return (
    <NextLink href={href} passHref>
      <a className={className}>{children}</a>
    </NextLink>
  );
};
