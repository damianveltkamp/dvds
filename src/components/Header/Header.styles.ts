import styled from "@emotion/styled";

export const SC_Header = styled("header")`
  padding: 20px;
  background-color: ${({ theme }) => `${theme.colors.DVBlue}`};
`;

export const SC_ContentContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 700px;
  margin: 0 auto;
  padding-inline: 20px;
`;
