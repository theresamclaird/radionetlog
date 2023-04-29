import React, { type ReactElement } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import type { EmotionCache } from "@emotion/react";
import { CacheProvider } from "@emotion/react";
import theme from "../theme";
import createEmotionCache from "../createEmotionCache";
import { Amplify } from "aws-amplify";
import AuthContext from "../context/AuthContext";
import NavBar from "../components/NavBar/NavBar";

import awsconfig from "../aws-exports";
Amplify.configure({ ...awsconfig, ssr: true });

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps): ReactElement {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <AuthContext>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Net Logbook</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar />
          <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Component {...pageProps} />
          </Container>
        </ThemeProvider>
      </CacheProvider>
    </AuthContext>
  );
}
