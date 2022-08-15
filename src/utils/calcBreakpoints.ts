import { theme } from "../theme/theme";

type calcBreakpointsProps = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

const pixelsToRem = (pixels: number) => {
  return pixels / theme.global.fontSize;
};

export const calcBreakpoints = (breakpoints: calcBreakpointsProps) => {
  const convertedBreakpoints = Object.entries(
    breakpoints
  ).reduce<calcBreakpointsProps>((acc, [key, value]) => {
    acc[key as keyof calcBreakpointsProps] = pixelsToRem(value);
    return acc;
  }, {} as calcBreakpointsProps);

  return convertedBreakpoints;
};
