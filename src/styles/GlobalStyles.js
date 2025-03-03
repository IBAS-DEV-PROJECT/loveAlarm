import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export default GlobalStyles;
