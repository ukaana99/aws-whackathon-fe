import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import DialogContentText from '@mui/material/DialogContentText';
import MuiDialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';

function DialogTitle(props) {
  const { title, subtitle, onClose } = props;

  return (
    <MuiDialogTitle sx={{ px: 2.5 }}>
      <Box display="flex" alignItems="center">
        <Box flexGrow={1}>
          <Box>{title}</Box>
          <DialogContentText>{subtitle}</DialogContentText>
        </Box>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
    </MuiDialogTitle>
  );
}

export default DialogTitle;
