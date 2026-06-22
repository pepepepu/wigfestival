import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Apple Garamond';
    src: url('/src/assets/fonts/AppleGaramond.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Apple Garamond';
    src: url('/src/assets/fonts/AppleGaramond-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Apple Garamond';
    src: url('/src/assets/fonts/AppleGaramond-Italic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Apple Garamond';
    src: url('/src/assets/fonts/AppleGaramond-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Apple Garamond', serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #000;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button, input, textarea {
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
  }

  ul, ol {
    list-style: none;
  }
`;
