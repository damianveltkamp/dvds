import styled from "@emotion/styled";
import media from "../../utils/media";

export const SC_ContentBlock = styled("div")`
  &:not(:last-child) {
    margin-bottom: 60px;
  }

  ${media.min("tablet")} {
    &:not(:last-child) {
      margin-bottom: 80px;
    }
  }

  > h1,
  > h2,
  > h3,
  > h4 {
    &:not(:first-child) {
      margin-top: 40px;
    }

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  > p {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  > pre {
    margin-block: 20px;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-top: 0;
    }
  }

  > figure {
    margin-block: 40px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  > ul,
  > ol {
    margin-block: 40px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
