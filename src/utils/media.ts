import { theme } from "../theme/theme";
import { calcBreakpoints } from "./calcBreakpoints";

const { sm, md, lg, xl } = calcBreakpoints(theme.breakpoints);

export const breakpoints = {
  mobile: sm,
  tablet: md,
  laptop: lg,
  desktop: xl,
};

type TypeofBreakpoints = keyof typeof breakpoints;
type BreakpointFunction = (breakpoint: TypeofBreakpoints) => string;
type BetweenFunction = (
  firstBreakpoint: TypeofBreakpoints,
  secondBreakpoint: TypeofBreakpoints
) => string;

const min: BreakpointFunction = (breakpoint) =>
  `@media (min-width: ${breakpoints[breakpoint]}em)`;
const max: BreakpointFunction = (breakpoint) =>
  `@media (max-width: ${breakpoints[breakpoint]}em)`;
const between: BetweenFunction = (firstBreakpoint, secondBreakpoint) =>
  `@media (min-width: ${breakpoints[firstBreakpoint]}em) an (max-width: ${breakpoints[secondBreakpoint]}em)`;

const media = {
  min,
  max,
  between,
};

export default media;
