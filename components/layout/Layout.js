import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

import Head from "next/head";

export const Layout = ({ setActiveLink, children }) => {
  return (
    <>
      <Head>
        <title>Vigenere Cipher</title>
      </Head>
      <div className="main-wrapper">
        <Navbar setActiveLink={setActiveLink} />
        <div className="content-wrapper">{children}</div>
        <Footer />
      </div>
    </>
  );
};
