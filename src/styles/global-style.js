import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  html {
    cursor: none;
    a:link {
      cursor: none;
    }
  }

  body {
    margin: 0;
    padding: 0;
    background: ${theme.colors.background};
    font-family: ${theme.fonts.mono};
    color: ${theme.colors.text};
    font-size: ${theme.fonts.sizeDefault};
    line-height: 1.5em;

    * {
      font-weight: ${theme.fonts.weightDefault};
    }

    // overflow: hidden;
    // overflow-y: scroll;

    // Hide scrollbar in multiple browsers
    scrollbar-width: none;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    *::selection {
      color: ${theme.colors.background};
      background-color: ${theme.colors.accent};
    }

    a {
      text-decoration: none;
      :link {
        color: ${theme.colors.accent};
      }
      :visited {
        color: ${theme.colors.accent};
      }
      :hover {
        color: ${theme.colors.background};
      }
      :active {
        color: ${theme.colors.background};
      }
    }
  }
}
`;

export default GlobalStyle;
