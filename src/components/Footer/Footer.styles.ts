import styled from "@emotion/styled";

export const SC_Footer = styled("footer")`
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => `${theme.colors.DVOrange}`};
`;
