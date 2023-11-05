import Box from '@mui/material/Box';

import PageLayout from '@/layouts/PageLayout';

function Home() {
  return (
    <PageLayout title="Home">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight={640}
        bgcolor="background.paper"
        p={4}
        borderRadius="8px"
        flexGrow={1}
      ></Box>
    </PageLayout>
  );
}

export default Home;
