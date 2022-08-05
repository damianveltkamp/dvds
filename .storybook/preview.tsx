import * as NextImage from "next/image";
import { Parameters, DecoratorFn } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

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

export const parameters: Parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators: DecoratorFn[] = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
