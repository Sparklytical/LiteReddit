import { CSSReset, ThemeProvider } from "@chakra-ui/core";

import theme from "../theme";

// import {
//   MeDocument,
//   MeQuery,
//   LoginMutation,
//   RegisterMutation,
//   LogoutMutation,
// } from "../generated/graphql";
// import { betterUpdateQuery } from "../utils/betterUpdateQuery";

function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
