import { css, createGlobalStyle } from "styled-components";

const cachedGlobalStyle = css`
  @import url("https://fonts.googleapis.com/css?family=Poppins:300,500&display=swap");

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    background: black;
  }

  body {
    color: white;
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
`;

export const GlobalStyle = createGlobalStyle(cachedGlobalStyle);
