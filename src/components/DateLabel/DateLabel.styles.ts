import styled from "@emotion/styled";

export const SC_DateLabel = styled("time")`
  display: block;
  font-family: ${({ theme }) => `${theme.typography.time.fontFamily}`};
  font-size: ${({ theme }) => `${theme.typography.time.fontSize}`};
  line-height: ${({ theme }) => `${theme.typography.time.lineHeight}`};

  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;
