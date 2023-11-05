import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CodeIcon from '@mui/icons-material/Code';
import HomeIcon from '@mui/icons-material/Home';
import PaletteIcon from '@mui/icons-material/Palette';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';

import { LayoutContext } from '@/providers/Layout';

import { Drawer, DrawerHeader } from '../styled';

function MainDrawer() {
  const navigate = useNavigate();

  const layoutContext = useContext(LayoutContext);
  const open = layoutContext.isDrawerOpen;

  const theme = useTheme();

  const items = [
    {
      path: '/',
      text: 'Home',
      icon: <HomeIcon />,
    },
    {
      path: '/playground',
      text: 'Playground',
      icon: <CodeIcon />,
    },
    {
      path: '/colors',
      text: 'Colors',
      icon: <PaletteIcon />,
    },
  ];

  const _renderDrawerItems = () => {
    return (
      <List>
        {items.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={{
                minHeight: 60,
                justifyContent: open ? 'initial' : 'center',
                px: 3,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={layoutContext.closeDrawer}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Box sx={{ height: 24 }} />
      {_renderDrawerItems()}
      <Box sx={{ height: 24 }} />
    </Drawer>
  );
}
export default MainDrawer;
