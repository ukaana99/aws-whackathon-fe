import MuiAppBar from '@mui/material/AppBar';
import MuiBox from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/system';

const drawerWidth = 240;

const drawerOpenedMixin = (theme) => ({
  width: drawerWidth,
  borderWidth: 0,
  overflowX: 'hidden',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const drawerClosedMixin = (theme) => ({
  width: `calc(${theme.spacing(7)} + 1px)`,
  borderWidth: 0,
  overflowX: 'hidden',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(10)} + 1px)`,
  },
});

const bottomBarOpenedMixin = (theme) => ({
  width: `calc(100% - ${drawerWidth}px)`,
  overflowX: 'hidden',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const bottomBarClosedMixin = (theme) => ({
  width: `calc(100% - calc(${theme.spacing(7)} + 1px))`,
  overflowX: 'hidden',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  [theme.breakpoints.up('sm')]: {
    width: `calc(100% - calc(${theme.spacing(10)} + 1px))`,
  },
});

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    border: 'none',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...drawerOpenedMixin(theme),
      '& .MuiDrawer-paper': drawerOpenedMixin(theme),
    }),
    ...(!open && {
      ...drawerClosedMixin(theme),
      '& .MuiDrawer-paper': drawerClosedMixin(theme),
    }),
  }),
);

export const BottomBarBox = styled(MuiBox, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    zIndex: 10,
    ...(open && {
      ...bottomBarOpenedMixin(theme),
    }),
    ...(!open && {
      ...bottomBarClosedMixin(theme),
    }),
  }),
);
