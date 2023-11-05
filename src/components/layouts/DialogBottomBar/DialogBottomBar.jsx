import Box from '@mui/material/Box';
import DialogActions from '@mui/material/DialogActions';
import Divider from '@mui/material/Divider';

function DialogBottomBar({ children, ...props }) {
  const { height = 64 } = props;

  return (
    <DialogActions sx={{ p: 0 }}>
      <Box bgcolor="background.paper" position="fixed" bottom={0} width="100%" zIndex={10}>
        <Divider />
        <Box height={height} display="flex" alignItems="center" px={4}>
          {children}
        </Box>
      </Box>
    </DialogActions>
  );
}

export default DialogBottomBar;
