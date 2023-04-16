import { createTheme } from "@mui/material";

export const tokens = () => {
  return {
    primary: {
      100: "#efafb0",
      200: "#e98e90",
      300: "#e57e80",
      400: "#e26e70",
      500: "#df5e60",
      600: "#c95556",
      700: "#b24b4d",
      800: "#9c4243",
      900: "#86383a",
    },

    secondary: {
      100: "#7ca7b6",
      200: "#6698aa",
      300: "#51899e",
      400: "#3b7b92",
      500: "#256c86",
      600: "#216179",
      700: "#1e566b",
      800: "#164150",
      900: "#133643",
    },
  };
};

const themeSettings = () => {
  const colors = tokens();

  return {
    palette: {
      primary: {
        main: colors.primary[500],
        light: colors.primary[300],
        dark: colors.primary[800],
      },
      secondary: {
        main: colors.secondary[500],
        light: colors.secondary[300],
        dark: colors.secondary[800],
      },
      text: {
        primary: "#212529",
      },
    },
    typography: {
      fontFamily: ["Readex Pro", " sans-serif"].join(","),
      p:{
        fontFamily: ["Readex Pro", " sans-serif"].join(","),
      },
      h1: {
        fontFamily: ["Readex Pro", " sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Readex Pro", " sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Readex Pro", " sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Readex Pro", " sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Readex Pro", " sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Readex Pro", " sans-serif"].join(","),
        fontSize: 14,
      },
    },
  //   shadows:[
  // //     shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  // // --shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
  // //   0 2px 4px -1px rgba(0, 0, 0, 0.06);
  // // --shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
  // //   0 4px 6px -2px rgba(0, 0, 0, 0.05);
  // // --shadow-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
  // //   0 10px 10px -5px rgba(0, 0, 0, 0.04);
  //   ]
  };
};

const theme = createTheme(themeSettings());

export default theme;
