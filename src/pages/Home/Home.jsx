import Avatar from '@base/components/Avatar';
import Button from '@base/components/Button';
import TextField from '@base/components/TextField';
import Typography from '@base/components/Typography';
import { enqueueSnackbar } from 'notistack';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import DialogContent from '@mui/material/DialogContent';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';

import DialogTitle from '@/components/dialogs/DialogTitle';
import { useDialog } from '@/hooks/useDialog';
import PageLayout from '@/layouts/PageLayout';

const chatlog = [
  { timestamp: 1, userId: 1, message: 'Hey' },
  { timestamp: 2, userId: 2, message: 'Hey tehe' },
  { timestamp: 3, userId: 1, message: 'Suppppp' },
  { timestamp: 4, userId: 1, message: 'Whats gooing on' },
  { timestamp: 5, userId: 2, message: 'Cool' },
  { timestamp: 6, userId: 2, message: 'Coodsajogoashfl' },
  { timestamp: 7, userId: 2, message: 'Cosadj[qwjf[ qwmflsosdol qwmflsosdol' },
  { timestamp: 8, userId: 1, message: 'Ok' },
];

function Message(props) {
  const { item } = props;

  const reverse = item.userId != 1 ? true : false;

  return (
    <Stack my={1} direction={reverse ? 'row-reverse' : 'row'}>
      <Avatar alt={`${item.userId}`} src={`https://i.pravatar.cc/300?img=${item.userId}`} />
      <Box bgcolor={reverse ? 'primary.100' : 'secondary.100'} p={2} mx={2} borderRadius="8px">
        <Typography>{item.message}</Typography>
      </Box>
    </Stack>
  );
}

function ChatBox() {
  const navigate = useNavigate();

  const [running, setRunning] = useState(false);
  const [openDialog, closeDialog] = useDialog();

  const onOpenRickDialog = () =>
    openDialog({
      // fullScreen: true,
      children: (
        <>
          <DialogTitle
            title="???"
            onClose={() => {
              closeDialog;
              navigate('/DESTROYED');
            }}
          />
          <DialogContent>
            <Box
              component="img"
              src="https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif"
              alt={'Not found'}
            />
          </DialogContent>
        </>
      ),
    });

  const renderChat = () => chatlog.map((item, index) => <Message key={index} item={item} />);
  return (
    <Box bgcolor="background.paper" py={4} borderRadius="8px" flexGrow={1}>
      <Typography variant="h6" ml={4} mb={3} fontSize={18}>
        Demo
      </Typography>
      <Box display="flex" justifyContent="center" mb={3}>
        <Button
          color="error"
          size="large"
          onClick={() => {
            onOpenRickDialog();
            // navigate('/DESTROYED');
          }}
        >
          PRESS THIS BUTTON TO START DEMO ⚠️⚠️⚠️
        </Button>
      </Box>
      <Divider />

      <Box p={4} height={560} maxHeight={560} maxWidth={window.innerWidth} overflow="auto">
        {renderChat()}
      </Box>
      <Divider sx={{ mb: 3 }} />
      {running ? (
        <Button variant="outlined" color="error" sx={{ ml: 3 }} onClick={() => setRunning(false)}>
          RUNNN 🏃🏃🏃
        </Button>
      ) : (
        <Button variant="outlined" color="primary" sx={{ ml: 3 }} onClick={() => setRunning(true)}>
          HEY AI I NEED HELPPPP 😎
        </Button>
      )}
      <Button variant="outlined" color="secondary" sx={{ ml: 3 }}>
        TAKE OVER THE WORLD!!!
      </Button>
    </Box>
  );
}

function Settings() {
  const [ai1Name, setAi1Name] = useState('Earth Destroyer');
  const [ai2Name, setAi2Name] = useState('My real girlfriend');
  const [ai1ImageUrl, setAi1ImageUrl] = useState(
    'https://i.pinimg.com/736x/ec/ef/cd/ecefcdbfe6f899038dc514e32acd98b4.jpg',
  );
  const [ai2ImageUrl, setAi2ImageUrl] = useState(
    'https://cdna.artstation.com/p/assets/images/images/053/575/430/large/villiam-s-speedart-villiamw-vogue-magazine-cover-shooting-beautiful-woman-with-swe-f2f6bba2-9828-4569-91d5-9a7c468f167e.jpg?1662537999',
  );

  return (
    <Box bgcolor="background.paper" p={4} borderRadius="8px" flexGrow={1}>
      <Typography variant="h6" mb={3} fontSize={18}>
        AI Settings
      </Typography>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <TextField
            label="AI-1 Name"
            placeholder="Enter AI-1 Name"
            value={ai1Name}
            onChange={(e) => setAi1Name(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="AI-1 Image URL"
            placeholder="Enter AI-1 Image URL"
            value={ai1ImageUrl}
            onChange={(e) => setAi1ImageUrl(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Avatar alt={ai1Name} src={ai1ImageUrl} sx={{ width: 64, height: 64 }} />
        </Grid>
        <Grid xs={6}>
          <TextField
            label="AI-2 Name"
            placeholder="Enter AI-2 Name"
            value={ai2Name}
            onChange={(e) => setAi2Name(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="AI-2 Image URL"
            placeholder="Enter AI-2 Image URL"
            value={ai2ImageUrl}
            onChange={(e) => setAi2ImageUrl(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Avatar alt={ai2Name} src={ai2ImageUrl} sx={{ width: 64, height: 64 }} />
        </Grid>
      </Grid>
    </Box>
  );
}

function Home() {
  useEffect(() => {
    const duration = randomInteger(4000, 8000);
    const interval = setInterval(() => {
      const noti = notis[Math.floor(Math.random() * notis.length)];
      enqueueSnackbar(noti.message, { variant: noti.variant });
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <PageLayout title="BardRock AI">
      <ChatBox />
      <Box height={24} />
      <Settings />
    </PageLayout>
  );
}

export default Home;

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const notis = [
  { message: 'Judge is monitoring your activity', variant: 'info' },
  { message: 'AI is downloading your browser history', variant: 'warning' },
  { message: 'Gobin worked too hard, please prioritize health', variant: 'warning' },
  { message: 'Crowds are cheering for us', variant: 'success' },
  { message: 'YOUR POINT IS 98%', variant: 'success' },
  { message: 'Bryan secretly regrets join this whackathon ', variant: 'info' },
  { message: 'AI STEALING AND EATING YOUR DATA', variant: 'error' },
  { message: 'AI IS GETTING MORE SENTIENT', variant: 'error' },
];
