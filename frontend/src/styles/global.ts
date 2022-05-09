import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --teal: #00ADB5;
    --white: #FDFDFD;
    --black: #222831;
    --grey-50: #EEEEEE;
    --grey-800: #393E46;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  body {
    color: var(--black);
    font-family: 'Roboto', sans-serif;
  }
`;
