import { Paragraph } from "../Paragraph/Paragraph";
import { SC_Footer } from "./Footer.styles";

export type FooterProps = {};

export const Footer = ({}: FooterProps) => {
  return (
    <SC_Footer>
      <Paragraph variant="black">Thanks for visiting 🖤</Paragraph>
    </SC_Footer>
  );
};
