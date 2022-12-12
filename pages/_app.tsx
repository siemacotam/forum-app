import { Layout, UsersList } from "components";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppContextProvider } from "AppContext/AppContext";
import { theme } from "theme";
import { useRouter } from "next/router";
import { NextComponentType, NextPageContext } from "next";
import userServices from "services/user-services";
import { IUser } from "global";

interface CustomAppProps {
  Component: NextComponentType<NextPageContext, any, any>;
  pageProps: {
    users: IUser[];
  };
}

export default function App({ Component, pageProps }: CustomAppProps) {
  const { asPath } = useRouter();
  const isHomePage = asPath === "/";

  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <CssBaseline />
          {isHomePage && <UsersList users={pageProps.users} />}
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AppContextProvider>
  );
}

App.getInitialProps = async () => {
  let pageProps: { users: IUser[] } = { users: [] };

  try {
    const data = await userServices.getUsers();

    if (data) {
      pageProps.users = data;
    }
  } catch (error) {}

  return { pageProps };
};
