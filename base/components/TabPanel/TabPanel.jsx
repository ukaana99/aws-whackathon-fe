import MuiTabPanel from '@mui/lab/TabPanel';
import { styled } from '@mui/system';

const StyledMuiTabPanel = styled(MuiTabPanel)(({ theme }) => ({}));

const TabPanel = (props) => <StyledMuiTabPanel {...props} />;

export default TabPanel;
