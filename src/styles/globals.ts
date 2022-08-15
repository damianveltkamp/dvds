import { css } from "@emotion/react";
import { theme } from "../theme/theme";

export const globalStyles = css`
  html,
  body {
    height: 100%;
    padding: 0;
    margin: 0;
    font-size: ${theme.global.fontSize};
  }

  #__next {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  main {
    padding: 40px 0;
  }

  * {
    box-sizing: border-box;
  }
`;
