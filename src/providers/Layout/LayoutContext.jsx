import { createContext } from 'react';

import themes from '@base/theme';

const dataTheme = localStorage.getItem('data-theme') ?? 'light';

const LayoutContext = createContext({
  themeMode: dataTheme,
  theme: themes[dataTheme],
  isDrawerOpen: false,
  toggleThemeMode: () => {},
  openDrawer: () => {},
  closeDrawer: () => {},
});

export default LayoutContext;
