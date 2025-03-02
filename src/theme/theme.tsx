import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    customLimitWidth: {
      maxWidth: number;
      maxWidth2: number;
      maxWidth3: number;
      maxWidth4: number;
      maxWidth5: number;
      maxWidth6: number;
      maxWidth7: number;
    };
  }
  interface ThemeOptions {
    customLimitWidth?: {
      maxWidth?: number;
      maxWidth2?: number;
      maxWidth3?: number;
      maxWidth4?: number;
      maxWidth5?: number;
      maxWidth6?: number;
      maxWidth7?: number;
    };
  }
}

const theme = createTheme({
  direction: "rtl",

  palette: {
    primary: {
      main: "#007bff",
    },
    secondary: {
      main: "#03dac6",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "IRANSans",
    fontSize: 12,
  },

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "primary",
          "&.Mui-checked": {
            color: "primary",
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          overflow: "hidden",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "IRANSans",
          fontWeight: 500,
          textTransform: "none",
          padding: "6px 12px",
        },
      },
    },
  },

  customLimitWidth: {
    maxWidth: 1280,
    maxWidth2: 1100,
    maxWidth3: 1000,
    maxWidth4: 900,
    maxWidth5: 600,
    maxWidth6: 1200,
    maxWidth7: 1900,
  },
});

export default theme;
