import { useContext } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

// import Toast from '@base/components/Toast';
import { SnackbarProvider } from 'notistack';

import { DialogProvider } from '@/providers/Dialog';
import { LayoutContext } from '@/providers/Layout';
import Routes from '@/routes';

function App() {
  const layoutContext = useContext(LayoutContext);

  return (
    <ThemeProvider theme={layoutContext.theme}>
      <SnackbarProvider
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <DialogProvider>
          <CssBaseline enableColorScheme />
          <Routes />
        </DialogProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
