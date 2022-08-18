const theme = {
  global: {
    fontSize: "18px",
  },
  colors: {
    DVBlue: "#1f2937",
    DVOrange: "#efa35d",
    white: "#ffffff",
    black: "#000000",
  },
  borderRadius: {
    primary: "8px",
  },
  typography: {
    heading: {
      mobile: {
        h1: {
          fontFamily: "Roboto-Bold",
          fontSize: "1.953rem",
          lineHeight: "150%",
        },
        h2: {
          fontFamily: "Roboto-Bold",
          fontSize: "1.563rem",
          lineHeight: "150%",
        },
        h3: {
          fontFamily: "Roboto-Medium",
          fontSize: "1.25rem",
          lineHeight: "150%",
        },
        h4: {
          fontFamily: "Roboto-Medium",
          fontSize: "1rem",
          lineHeight: "150%",
        },
      },
      desktop: {
        h1: {
          fontFamily: "Roboto-Bold",
          fontSize: "2.441rem",
          lineHeight: "150%",
        },
        h2: {
          fontFamily: "Roboto-Bold",
          fontSize: "1.953rem",
          lineHeight: "150%",
        },
        h3: {
          fontFamily: "Roboto-Medium",
          fontSize: "1.563rem",
          lineHeight: "150%",
        },
        h4: {
          fontFamily: "Roboto-Medium",
          fontSize: "1.25rem",
          lineHeight: "150%",
        },
      },
    },
    paragraphy: {
      fontFamily: "Roboto-Regular",
      fontSize: "1rem",
      lineHeight: "150%",
    },
    time: {
      fontFamily: "Roboto-Regular",
      fontSize: "1rem",
      lineHeight: "150%",
    },
    tag: {
      fontFamily: "Roboto-Regular",
      fontSize: "0.65rem",
      lineHeight: "150%",
    },
  },
  breakpoints: {
    sm: 30,
    md: 48,
    lg: 64,
    xl: 80,
  },
  animations: {
    primary: "250ms ease-in-out",
  },
} as const;

type TypeofTheme = typeof theme;

export { theme, TypeofTheme };
