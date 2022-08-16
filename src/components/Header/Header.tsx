import { GithubBrands, Logo } from "../../icons/components";
import { BareLink } from "../Link/BareLink";
import { SC_ContentContainer, SC_Header } from "./Header.styles";

export type HeaderProps = {};

export const Header = ({}: HeaderProps) => {
  return (
    <SC_Header>
      <SC_ContentContainer>
        <BareLink href="/">
          <Logo size={45} color="white" />
        </BareLink>
        <BareLink href="https://github.com/damianveltkamp">
          <GithubBrands size={35} color="white" />
        </BareLink>
      </SC_ContentContainer>
    </SC_Header>
  );
};
