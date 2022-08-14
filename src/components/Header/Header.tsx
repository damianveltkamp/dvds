import { GithubBrands, Logo } from "../../icons/components";
import { SC_ContentContainer, SC_Header } from "./Header.styles";

export type HeaderProps = {};

export const Header = ({}: HeaderProps) => {
  return (
    <SC_Header>
      <SC_ContentContainer>
        <Logo size={45} color="white" />
        <GithubBrands size={35} color="white" />
      </SC_ContentContainer>
    </SC_Header>
  );
};
