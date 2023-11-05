import HelpIcon from '@mui/icons-material/Help';
import MuiTooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/system';

import Typography from '@base/components/Typography';

const StyledMuiTooltip = styled(({ className, ...props }) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 250,
    backgroundColor: theme.palette.common.black,
  },
}));

const defaultProps = {
  arrow: true,
  placement: 'top',
  title: 'Tooltip text',
  icon: <HelpIcon sx={{ ml: 0.25, fontSize: 18 }} />,
};

const DefaultTooltip = ({ title, icon, ...props }) => (
  <StyledMuiTooltip
    {...props}
    title={
      <Typography fontSize={12} fontWeight={700} p={0.5}>
        {title}
      </Typography>
    }
  >
    {icon}
  </StyledMuiTooltip>
);
DefaultTooltip.defaultProps = defaultProps;

const Tooltip = (props) => {
  const { icon } = props;

  return <DefaultTooltip {...props} />;
};

export default Tooltip;
