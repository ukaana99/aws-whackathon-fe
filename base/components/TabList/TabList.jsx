import MuiTabList from '@mui/lab/TabList';
import { styled } from '@mui/system';

// Styled Tabs to remove the indicator (underline)
const StyledMuiTabList = styled(MuiTabList)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  '& .MuiTabs-indicator': {
    display: 'none',
  },
}));

const TabList = (props) => <StyledMuiTabList {...props} />;

export default TabList;
