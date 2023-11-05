import MuiTab from '@mui/material/Tab';
import { styled } from '@mui/system';

const StyledMuiTab = styled(MuiTab)(({ theme }) => ({
  margin: theme.spacing(1),
  marginTop: theme.spacing(1.5),
  marginBottom: theme.spacing(2),
  minWidth: 0,
  minHeight: 24,
  lineHeight: 1,
  '&:hover': {
    borderRadius: 8,
    backgroundColor: theme.palette.primary[50],
    ...(theme.palette.mode === 'dark' && {
      backgroundColor: theme.palette.primary[900],
    }),
  },
  '&.Mui-selected': {
    borderRadius: 8,
    color: theme.palette.primary[700],
    backgroundColor: theme.palette.primary[100],
    ...(theme.palette.mode === 'dark' && {
      color: theme.palette.primary[200],
      backgroundColor: theme.palette.primary[800],
    }),
  },
}));

const Tab = (props) => <StyledMuiTab {...props} />;

export default Tab;
