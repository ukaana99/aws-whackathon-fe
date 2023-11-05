import { Outlet } from 'react-router-dom';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';


import AppBar from '@/components/layouts/AppBar';
import Drawer from '@/components/layouts/Drawer';
import { DrawerHeader } from '@/components/layouts/styled';

function MainLayout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar />
      <Drawer />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <DrawerHeader />
        <Box px={4} pt={3}>
        </Box>
        <Outlet />
      </Box>
    </Box>
  );
}
export default MainLayout;
