import styled from "@emotion/styled";

export const SC_Paragraph = styled("p")`
  margin: 0;
  font-family: ${({ theme }) => `${theme.typography.paragraphy.fontFamily}`};
  font-size: ${({ theme }) => `${theme.typography.paragraphy.fontSize}`};
  line-height: ${({ theme }) => `${theme.typography.paragraphy.lineHeight}`};
  color: ${({ theme }) => `${theme.colors.white}`};
`;
