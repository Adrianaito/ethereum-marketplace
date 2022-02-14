/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || React.Fragment;

  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
