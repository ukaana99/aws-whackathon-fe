import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import DialogContent from '@mui/material/DialogContent';

function DialogLayout({ children, ...props }) {
  const { bottomBar, bottomBarHeight = 0, minWidth = 1096 } = props;
  const matches = useMediaQuery('(min-width:1096px)');

  return (
    <Box>
      <DialogContent>
        <Box
          mx={matches ? 10 : 0}
          mt={3.5}
          minWidth={minWidth}
          minHeight={window.innerHeight - bottomBarHeight}
        >
          {children}
        </Box>
      </DialogContent>
      <Box height={bottomBarHeight} />
      {bottomBar}
    </Box>
  );
}

export default DialogLayout;
