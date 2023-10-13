import Layout from "./_Layout";
import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}

export default MyApp;
