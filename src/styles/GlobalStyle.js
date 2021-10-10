import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500;600&display=swap');

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }

  body, button {
    font-family: 'Open Sans', sans-serif;
  }

  .page {
    position: relative;
  }

  .page-enter {
    opacity: 0;
    transform: scale(1.1);
  }

  .page-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 300ms, transform 300ms;
  }

  .page-exit {
    opacity: 1;
    transform: scale(1);
  }

  .page-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }

`;
