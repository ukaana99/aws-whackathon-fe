import { useContext } from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import { LayoutContext } from '@/providers/Layout';

import { BottomBarBox } from '../styled';

function BottomBar({ children, ...props }) {
  const { height = 64 } = props;

  const layoutContext = useContext(LayoutContext);
  const open = layoutContext.isDrawerOpen;

  return (
    <BottomBarBox bgcolor="background.paper" position="fixed" bottom={0} open={open}>
      <Divider />
      <Box height={height} display="flex" alignItems="center" px={4}>
        {children}
      </Box>
    </BottomBarBox>
  );
}

export default BottomBar;
