import styled from "@emotion/styled";

import media from "../../utils/media";

export const SC_MainContainer = styled("main")`
  max-width: 700px;
  margin: 0 auto;
  padding-inline: 20px;
  padding-top: 20px;
  padding-bottom: 40px;

  ${media.min("tablet")} {
    padding-top: 40px;
    padding-bottom: 60px;
  }
`;
