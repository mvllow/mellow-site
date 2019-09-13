import { css, createGlobalStyle } from "styled-components";

// `createGlobalStyle` is enough, however adding `css` allows for prettier to format properly
export const GlobalStyle = createGlobalStyle(css`
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
`);
