import { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
// @ts-ignore
import GlobalStyle from "@/theme/globalStyle.css";
import { theme } from "@/theme/theme";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: "/favicon.ico",
      type: "image/x-icon",
    },
    { rel: "stylesheet", href: GlobalStyle },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Georama:wght@200;300;400;600",
    },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "One library",
  viewport: "width=device-width,initial-scale=1",
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
          <Outlet />
        </MuiThemeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export default App;
