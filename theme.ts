import { createTheme } from "@mui/material";

import { Oswald } from "@next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(0,0,0)",
    },
  },
  typography: {
    fontFamily: `${oswald.style.fontFamily} ,"Roboto", "Helvetica", "Arial"`,
  },
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          paddingBottom: "16px !important",
        },
      },
    },
  },
});
