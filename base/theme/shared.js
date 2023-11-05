// https://mui.com/material-ui/customization/theme-components/
import { blue, blueGray, emeraldGreen, gray, green, purple, red, yellow } from '@base/colors';

const sharedTheme = {
  palette: {
    background: {
      default: '#f0f2f5',
      paper: '#ffffff',
    },
    primary: emeraldGreen,
    secondary: purple,
    neutral: blueGray,
    neutral2: gray,
    info: blue,
    success: green,
    warning: yellow,
    error: red,
  },
  typography: {
    fontFamily: 'Inter',
    button: {
      textTransform: 'none',
    },
    h4: {
      fontWeight: 700,
      fontSize: '2rem',
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h1: {
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: '0.8rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.8rem',
      fontWeight: 400,
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiDivider: {
      styleOverrides: {
        vertical: {
          marginRight: 10,
          marginLeft: 10,
        },
        // TODO: open issue for missing "horizontal" CSS rule
        // in Divider API - https://mui.com/material-ui/api/divider/#css
        middle: {
          marginTop: 10,
          marginBottom: 10,
          width: '80%',
        },
      },
    },
  },
};
// TODO (Suren): replace mui-utils-deepmerge with lodash or ramda deepmerge

export default sharedTheme;
