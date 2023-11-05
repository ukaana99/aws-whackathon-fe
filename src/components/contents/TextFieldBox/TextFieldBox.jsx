import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const StyledBox = styled(Box)(({ theme }) => ({
  border: '1px solid',
  borderRadius: '8px',
  borderColor: theme.palette.neutral[200],
  backgroundColor: theme.palette.neutral[50],
  padding: theme.spacing(3),
  paddingTop: theme.spacing(2),
  ...(theme.palette.mode === 'dark' && {
    borderColor: theme.palette.neutral[800],
    backgroundColor: theme.palette.neutral[900],
  }),
}));

const DefaultTextFieldBox = ({ children, ...props }) => {
  return <StyledBox {...props}>{children}</StyledBox>;
};

const TextFieldBox = (props) => {
  return <DefaultTextFieldBox {...props} />;
};

export default TextFieldBox;
