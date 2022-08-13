import styled from "@emotion/styled";

export const SC_Paragraph = styled("p")<{ variant?: string }>`
  margin: 0;
  font-family: ${({ theme }) => `${theme.typography.paragraphy.fontFamily}`};
  font-size: ${({ theme }) => `${theme.typography.paragraphy.fontSize}`};
  line-height: ${({ theme }) => `${theme.typography.paragraphy.lineHeight}`};
  color: ${({ theme, variant }) =>
    variant === "black" ? `${theme.colors.black}` : `${theme.colors.white}`};
`;
