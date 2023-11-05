import { blueGray, gray } from '@base/colors';

const whiteBg = '#f0f2f5';
const white = '#fff';
const blackBg = '#111111';
const black = '#1a1a1a';

const Colors = {
  light: {
    backgroundDefault: whiteBg,
    backgroundPaper: white,

    contrastText: white,

    textPrimary: gray[900],
    textSecondary: gray[800],
    textHint: gray[500],
    textDisabled: gray[400],

    divider: blueGray[300],
  },
  dark: {
    backgroundDefault: blackBg,
    backgroundPaper: black,

    textPrimary: gray[100],
    textSecondary: gray[200],
    textHint: gray[400],
    textDisabled: gray[500],

    divider: blueGray[900],
  },
};

export default Colors;
