import { GithubBrands, Logo } from "../../icons/components";
import { BareLink } from "../Link/BareLink";
import {
  SC_ContentContainer,
  SC_Header,
  SC_IconContainer,
} from "./Header.styles";

export type HeaderProps = {};

export const Header = ({}: HeaderProps) => {
  return (
    <SC_Header>
      <SC_ContentContainer>
        <SC_IconContainer href="/">
          <Logo size={45} color="white" />
        </SC_IconContainer>
        <SC_IconContainer
          href="https://github.com/damianveltkamp"
          isExternal={true}
        >
          <GithubBrands size={35} color="white" />
        </SC_IconContainer>
      </SC_ContentContainer>
    </SC_Header>
  );
};
