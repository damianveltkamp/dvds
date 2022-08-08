import styled from "@emotion/styled";

export const SC_NextLink = styled("a")`
  font-family: "Roboto-Regular";
  font-size: 1rem;
  color: ${({ theme }) => `${theme.colors.secondary}`};
  text-decoration: none;

  &:hover,
  &:focus {
    outline: 2px solid ${({ theme }) => `${theme.colors.secondary}`};
  }
`;
