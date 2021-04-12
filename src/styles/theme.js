const palette = {
  white: '#ffffff',
  cream: '#f0f0f0',
  red: '#f04646',
  lightRed: '#f25050',
  darkRed: '#c72424',
  peach: '#ffa984',
  peach2: '#ff8e5e',
  darkPeach: '#b86440',
  blue: '#4287f5',
  lightBlue: '#79cafc',
  darkBlue: '#0a1930',
  grey4: '#cccccc',
  grey3: '#999999',
  grey2: '#444444',
  grey1: '#151515',
  black: '#000000',
};

const theme = {
  colors: {
    background: palette.darkBlue,
    backgroundLight: palette.grey2,
    text: palette.grey4,
    textLight: palette.grey4,
    accent: palette.peach2,
    accentLight: palette.peach2,
    accentDark: palette.darkPeach,
  },
  fonts: {
    sans: 'IBM Plex Sans',
    mono: 'IBM Plex Mono',
    extra: 'Montserrat',
    sizeDefault: '17px',
    weightDefault: 300,
  },
  sizes: {
    maxWidth: '600px',
  },
};

export default theme;
