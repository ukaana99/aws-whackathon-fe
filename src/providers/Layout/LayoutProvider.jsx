import { useEffect, useRef, useState } from 'react';

import { createTheme } from '@mui/material/styles';

import themes from '@base/theme';

import LayoutContext from './LayoutContext';

const dataTheme = localStorage.getItem('data-theme') ?? 'light';

const LayoutProvider = (props) => {
  const [themeMode, setThemeMode] = useState(dataTheme);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleThemeMode = () => setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  useEffect(() => {
    localStorage.setItem('data-theme', themeMode);
  }, [themeMode]);

  const theme = createTheme(themes[themeMode]);
  return (
    <LayoutContext.Provider
      value={{
        themeMode,
        theme,
        isDrawerOpen,
        toggleThemeMode,
        openDrawer,
        closeDrawer,
      }}
    >
      {props.children}
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
