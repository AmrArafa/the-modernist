import { createGlobalStyle } from 'styled-components';

/** The GlobalStyle component applies generic styling to the entire document */
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lora:400,700&display=swap');

  html {
    box-sizing: border-box;
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }

  html,
  body {
    scroll-behavior: smooth;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Lora', serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.6;
  }
`;

export default GlobalStyle;