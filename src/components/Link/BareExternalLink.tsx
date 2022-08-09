import { ReactNode } from "react";

export type BareExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export const BareExternalLink = ({
  href,
  children,
  className,
}: BareExternalLinkProps) => {
  return (
    <a href={href} rel="noreferrer" target="_blank" className={className}>
      {children}
    </a>
  );
};
