import { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import GlobalStyle from "@/theme/globalStyle.css";
import Layout from "./components/Layout";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: GlobalStyle },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Georama:wght@200;300;400;600",
    },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Library",
  viewport: "width=device-width,initial-scale=1",
});

const theme = createTheme({
  typography: {
    fontFamily: ["Georama"].join(","),
  },
});

const App: React.FC = () => {
  return (
    <html>
      <head>
        <Meta />
        <Links />
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <body>
        <MuiThemeProvider theme={theme}>
          {setOutletLayout()}
        </MuiThemeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

const setOutletLayout = () => {
  const location = useLocation();

  if (location.pathname === "/login") {
    return <Outlet />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default App;
