import styled from "@emotion/styled";

export const SC_Link = styled("a")`
  font-family: "Roboto-Regular";
  font-size: 1rem;
  color: ${({ theme }) => `${theme.colors.DVOrange}`};
  text-decoration: none;

  &:focus {
    outline: 2px solid ${({ theme }) => `${theme.colors.DVOrange}`};
  }
`;
