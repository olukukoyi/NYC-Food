import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import { purple } from "@mui/material/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
// import { signInWithGoogle, logOut } from "../Firebase";
import { createContext } from "react";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#fefefe" },
    secondary: purple,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function MyApp({ Component, pageProps }) {
  // const signInFunction = createContext(signInWithGoogle);
  // const logOutFunction = createContext(logOut);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        {/* <Layout signIn={signInWithGoogle}> */}
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
