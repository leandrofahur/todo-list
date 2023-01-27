import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    max-width: 100vw;
    width: 100%;

    max-height: 100vh;
    height: 100%;

    background-color: ${(props) => props.theme.colors["gray-900"]};
    color: ${(props) => props.theme.colors["gray-100"]};    

    -webkit-font-smoothing: antialiased;    

    display: flex;
    justify-content: center;
  }

  body, input, button {
    font: 400 1rem 'Roboto', sans-serif;
  }
`;
