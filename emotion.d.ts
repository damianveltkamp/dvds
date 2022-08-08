import "@emotion/react";
import { theme } from "./src/theme/theme";

type TypeofTheme = typeof theme;

declare module "@emotion/react" {
  export interface Theme extends TypeofTheme {}
}
