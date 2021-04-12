import { css } from 'styled-components';
import theme from './theme';

const mixins = {
  whiteLink: css`
    a {
      text-decoration: none;
      :link {
        color: ${theme.colors.text};
      }
      :visited {
        color: ${theme.colors.text};
      }
      :hover {
        color: ${theme.colors.background};
      }
      :active {
        color: ${theme.colors.background};
      }
    }
  `,
};

export default mixins;
