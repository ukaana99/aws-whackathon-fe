import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import PageLayout from '@/layouts/PageLayout';

import { Images } from '@base/constants';

function NotFound() {
  return (
    <PageLayout title="Page Not Found">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight={640}
        bgcolor="background.paper"
        p={4}
        borderRadius="8px"
        flexGrow={1}
      >
        <Box display="flex" flexDirection="column" alignItems="center" width={395}>
          <Box component="img" src={Images.Maintenance} alt={'Not found'} />
          <Box height={16} />
          <Typography variant="h6" color="primary" fontSize={18}>
            Error! Page not found.
          </Typography>
        </Box>
      </Box>
    </PageLayout>
  );
}

export default NotFound;
