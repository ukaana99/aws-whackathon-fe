import { deepmerge } from '@mui/utils';

import { Colors } from '@base/constants';

import sharedTheme from './shared';

const themes = {
  default: sharedTheme,
  light: deepmerge(sharedTheme, {
    palette: {
      mode: 'light',
      background: {
        default: Colors.light.backgroundDefault,
        paper: Colors.light.backgroundPaper,
      },
      text: {
        primary: Colors.light.textPrimary,
        secondary: Colors.light.textSecondary,
        hint: Colors.light.textHint,
        disabled: Colors.light.textDisabled,
      },
      divider: Colors.light.divider,
    },
  }),

  dark: deepmerge(sharedTheme, {
    palette: {
      mode: 'dark',
      background: {
        default: Colors.dark.backgroundDefault,
        paper: Colors.dark.backgroundPaper,
      },
      text: {
        primary: Colors.dark.textPrimary,
        secondary: Colors.dark.textSecondary,
        hint: Colors.dark.textHint,
        disabled: Colors.dark.textDisabled,
      },
      divider: Colors.dark.divider,
    },
  }),
};

export default themes;
