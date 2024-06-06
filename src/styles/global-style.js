import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${theme.colors.background};
    font-family: ${theme.fonts.sans};
    color: ${theme.colors.text};
    font-size: ${theme.fonts.sizeDefault};
    line-height: 1.5em;

    * {
      font-weight: ${theme.fonts.weightDefault};
    }

    *::selection {
      color: ${theme.colors.background};
      background-color: ${theme.colors.accent};
    }

    a {
      text-decoration: none;
      text-underline-offset: 0.3em;
      font-weight:bold;
      color: ${theme.colors.accent};
    }
    a:hover {
      text-decoration: underline !important;
    }
  }
}
`;

export default GlobalStyle;
