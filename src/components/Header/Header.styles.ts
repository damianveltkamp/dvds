import styled from "@emotion/styled";

export const SC_Header = styled("header")`
  background-color: ${({ theme }) => `${theme.colors.DVBlue}`};
`;

export const SC_ContentContainer = styled("div")`
  max-width: 700px;
  margin: 0 auto;
  padding-inline: 20px;
`;
