import "@emotion/react";

const theme = {
  colors: {
    primary: "#1f2937",
    secondary: "#efa35d",
    white: "#ffffff",
    black: "#000000",
  },
  borderRadius: {
    primary: "8px",
  },
};

typeof theme;

declare module "@emotion/react" {
  export interface Theme {
    colors: typeof theme.colors;
    borderRadius: typeof theme.borderRadius;
  }
}
