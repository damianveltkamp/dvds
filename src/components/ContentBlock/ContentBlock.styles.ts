import styled from "@emotion/styled";
import media from "../../utils/media";

export const SC_ContentBlock = styled("div")`
  margin-bottom: 40px;

  ${media.min("tablet")} {
    margin-bottom: 60px;
  }

  > h1,
  > h2,
  > h3,
  > h4 {
    &:not(:last-child) {
      margin-bottom: 25px;
    }
  }

  > p {
    &:not(:last-child) {
      margin-bottom: 15px;
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
