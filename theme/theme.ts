import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 10,
    fontFamily: "IBM Plex Sans",
    fontSize: 18,
    h1: {
      fontSize: 48,
      lineHeight: 1.25,
      fontWeight: 700,
      color: "#333333",
    },
    h2: {
      fontSize: 24,
      lineHeight: 1.25,
      fontWeight: 500,
      color: "#333333",
    },
    h3: {
      fontSize: 24,
      lineHeight: 1.41,
      color: "blue",
    },
    body1: {
      fontSize: 18,
      lineHeight: 1.44,
    },
    body2: {
      fontSize: 18,
      lineHeight: 1.44,
    },
    caption: {
      fontSize: 14,
      letterSpacing: 0.24,
      fontWeight: 500,
      lineHeight: 1.14,
      textTransform: "uppercase",
    },
  },
  palette: {
    background: {
      default: "#ABD6DFFF",
    },
    common: {
      black: "#333333",
      white: "#ffffff",
    },
    text: {
      primary: "#666666",
      secondary: "#ffffff",
    },
    primary: {
      main: "#E7EBE0FF",
    },
    secondary: {
      main: "#7DB46CFF",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1440,
    },
  },
  spacing: 5,
  mixins: {
    toolbar: {
      minHeight: 74,
      ["@media (min-width: 600px) and (orientation: landscape)"]: {
        minHeight: 74,
      },
      ["@media (min-width: 1200px)"]: {
        minHeight: 110,
      },
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          paddingRight: "0 !important",
          color: "#666666",
        },
      },
    },
    MuiContainer: {
      root: {
        "@media (min-width: 600px)": {},
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: "#8d99ae",
      },
    },
    MuiButton: {
      containedPrimary: {
        color: "#2B2D42",
        border: "1px solid #2B2D42",
        fontSize: 50,
        transitionProperty: "background-color, box-shadow, border, color",

        "&:active": {
          border: "1px solid #0bb14d",
          color: "#ffffff !important",
          background:
            "linear-gradient(90deg, rgba(11,177,77,1) 0%, rgba(0,130,86,1) 100%)",
        },
        "&:hover, &:focus": {
          border: "1px solid #0bb14d",
          color: "#0bb14d",
          backgroundColor: "transparent",
        },
      },

      outlinedPrimary: {
        color: "#2B2D42",
        border: "1px solid #2B2D42",
        fontSize: 50,
        transitionProperty: "background-color, box-shadow, border, color",

        "&:active": {
          border: "1px solid #0bb14d",
          color: "#ffffff !important",
          background:
            "linear-gradient(90deg, rgba(11,177,77,1) 0%, rgba(0,130,86,1) 100%)",
        },
        "&:hover, &:focus": {
          border: "1px solid #0bb14d",
          color: "#0bb14d",
          backgroundColor: "transparent",
        },
      },
    },
  },
});

theme.typography.h1 = {
  fontSize: 36,
  lineHeight: 1.25,

  [theme.breakpoints.up("md")]: {
    fontSize: 48,
    lineHeight: 1.25,
  },
};

export default theme;
