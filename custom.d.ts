import "@emotion/react";
import { theme } from "./src/theme/theme";

type TypeofTheme = typeof theme;

// Emotion theme declaration
declare module "@emotion/react" {
  export interface Theme extends TypeofTheme {}
}

// SVG file declarations
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
