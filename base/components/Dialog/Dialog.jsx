import MuiDialog from '@mui/material/Dialog';
import { styled } from '@mui/system';

const StyledMuiDialog = styled(MuiDialog)(({ theme, fullScreen }) => ({
  '& .MuiDialog-paper': {
    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 0.0))',
    backgroundColor: theme.palette.background.paper,
    ...(fullScreen && {
      backgroundColor: theme.palette.background.default,
    }),
  },
}));

const DefaultDialog = (props) => <StyledMuiDialog {...props} />;
DefaultDialog.defaultProps = {};

const Dialog = (props) => {
  return <DefaultDialog {...props}></DefaultDialog>;
};

export default Dialog;
