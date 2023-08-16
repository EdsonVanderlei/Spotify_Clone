import React from "react";
import { AnimatePresence } from "framer-motion";

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
  );
};

export default MyApp;
