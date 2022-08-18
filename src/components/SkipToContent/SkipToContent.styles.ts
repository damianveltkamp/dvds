import styled from "@emotion/styled";

export const SC_SkipToContent = styled("a")`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  padding: 10px 20px;
  background-color: ${({ theme }) => `${theme.colors.DVOrange}`};
  text-decoration: none;
  color: ${({ theme }) => `${theme.colors.black}`};
  font-family: ${({ theme }) => `${theme.typography.paragraphy.fontFamily}`};
  font-size: ${({ theme }) => `${theme.typography.paragraphy.fontSize}`};
  transition: ${({ theme }) => `opacity ${theme.animations.primary}`};

  &:focus {
    outline: none;
    opacity: 1;
  }
`;
