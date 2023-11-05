import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function PageLayout({ children, ...props }) {
  const { title, bottomBar, bottomBarHeight = 0, minWidth = 1096 } = props;

  return (
    <Box>
      <Box minWidth={minWidth} mx={4} mb={4} flexGrow={1}>
        <Typography variant="h4">{title}</Typography>
        <Box height={32} />
        {children}
        <Box height={56 + bottomBarHeight} />
      </Box>
      {bottomBar}
    </Box>
  );
}

export default PageLayout;
