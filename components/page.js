import React from "react";
import Head from "next/head";

const Page = ({ children }) => (
  <>
    <Head>
      <title>mvllow</title>
    </Head>

    <main>{children}</main>

    <style jsx>{`
      main {
        padding: 2rem;
        width: 100%;
        height: calc(100vh - 4rem);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
    `}</style>

    <style jsx global>{`
      @import url("https://fonts.googleapis.com/css?family=Poppins:300,500&display=swap");

      *, *: before, *: after {
        box-sizing: border-box;
      }

      html {
        background: black;
      }

      body {
        color: white;
        background: black;
        font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
          "Segoe UI Emoji", "Segoe UI Symbol";
        -webkit-anti-aliased-webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      h1,
      h2,
      h3 {
        margin: 0;
      }
    `}</style>
  </>
);
export default Page;
