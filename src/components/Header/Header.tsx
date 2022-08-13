import { SC_ContentContainer, SC_Header } from "./Header.styles";

export type HeaderProps = {};

export const Header = ({}: HeaderProps) => {
  return (
    <SC_Header>
      <SC_ContentContainer>Hey</SC_ContentContainer>
    </SC_Header>
  );
};
