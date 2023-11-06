import Avatar from '@base/components/Avatar';
import Button from '@base/components/Button';
import TextField from '@base/components/TextField';
import Typography from '@base/components/Typography';
import { enqueueSnackbar } from 'notistack';

import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import DialogContent from '@mui/material/DialogContent';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';

import { fetchData, triggerLambda } from '@/api/fetchData';
import DialogTitle from '@/components/dialogs/DialogTitle';
import { useDialog } from '@/hooks/useDialog';
import PageLayout from '@/layouts/PageLayout';
import { SettingsContext } from '@/providers/Settings';

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

  const settingsContext = useContext(SettingsContext);
  const { ai1Name, ai2Name, ai1ImageUrl, ai2ImageUrl } = settingsContext;

  const reverse = item.aimodel === 'vertexai' ? true : false;

  return (
    <Stack my={2} direction="column">
      <Stack direction={reverse ? 'row-reverse' : 'row'}>
        <Avatar alt={`${item.aimodel}`} src={reverse ? ai1ImageUrl : ai2ImageUrl} />
        <Box mx={2}>
          <Stack direction={reverse ? 'row-reverse' : 'row'}>
            <Typography variant="subtitle1">{reverse ? ai1Name : ai2Name}</Typography>
          </Stack>
          <Box bgcolor={reverse ? 'primary.100' : 'secondary.100'} p={2} borderRadius="8px">
            <Typography>{item.message}</Typography>
          </Box>
          <Stack direction={reverse ? 'row' : 'row-reverse'}>
            <Typography variant="disabled" fontSize={12}>
              {item.inserted_timestamp}
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}

function ChatBox() {
  const navigate = useNavigate();

  const [aiDomination, setAiDomination] = useState(false);
  const [running, setRunning] = useState(false);
  const [chats, setChats] = useState([]);
  const [openDialog, closeDialog] = useDialog();

  useEffect(() => {
    const updateChats = async () => {
      const data = await fetchData();
      if (running) setChats(data.Items);
    };

    const interval = setInterval(() => {
      updateChats();
    }, 2000);

    return () => clearInterval(interval);
  }, [running]);

  const onOpenRickDialog = () =>
    openDialog({
      // fullScreen: true,
      children: (
        <>
          <DialogTitle
            title="???"
            onClose={() => {
              closeDialog();
              navigate('/DESTROYED');
            }}
          />
          <DialogContent>
            <Box
              component="img"
              src="https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif"
              alt="Not found"
            />
          </DialogContent>
        </>
      ),
    });

  const renderChat = () => chats.map((item, index) => <Message key={index} item={item} />);

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
        {chats.length === 0 ? (
          <Box
          height={560}
            component="img"
            src={
              aiDomination
                ? 'https://giffiles.alphacoders.com/261/26100.gif'
                : 'https://media4.giphy.com/media/3orif5NUjcfHZLfZZK/giphy.gif'
            }
            alt="Not found"
          />
        ) : (
          renderChat()
        )}
      </Box>
      <Divider sx={{ mb: 3 }} />
      {running ? (
        <Button variant="outlined" color="error" sx={{ ml: 3 }} onClick={() => setRunning(false)}>
          STOP RUNNNING 🏃🏃🏃
        </Button>
      ) : (
        <Button
          variant="outlined"
          color="primary"
          sx={{ ml: 3 }}
          onClick={async () => {
            setRunning(true);
            setAiDomination(false);
            const data = await triggerLambda();
          }}
        >
          HEY AI I NEED HELPPPP 😎
        </Button>
      )}
      <Button
        variant="outlined"
        color="secondary"
        onClick={async () => {
          setRunning(false);
          setAiDomination(true);
          setChats([]);
        }}
        sx={{ ml: 3 }}
      >
        TAKE OVER THE WORLD!!!
      </Button>
    </Box>
  );
}

function Settings() {
  const settingsContext = useContext(SettingsContext);
  const {
    ai1Name,
    ai2Name,
    ai1ImageUrl,
    ai2ImageUrl,
    setAi1Name,
    setAi2Name,
    setAi1ImageUrl,
    setAi2ImageUrl,
  } = settingsContext;

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
  { message: 'WHERE ARE THE OTHER BITMUNCHERS??? ANYONE KNOWS?', variant: 'info' },
  { message: 'AI is downloading your browser history', variant: 'warning' },
  { message: 'Gobin worked too hard, please prioritize health', variant: 'warning' },
  { message: 'Someone needs sleep', variant: 'warning' },
  {
    message: 'Do not tell my Product Manager that I am skipping work today',
    variant: 'warning',
  },
  { message: 'Crowds are cheering for us', variant: 'success' },
  { message: 'Can I get a raise Bryan?', variant: 'success' },
  { message: 'YOUR POINT IS 98%', variant: 'success' },
  { message: 'Finally we are here~~~', variant: 'success' },
  { message: 'Bryan secretly regretted join this whackathon ', variant: 'info' },
  { message: 'AI STEALING AND EATING YOUR DATA', variant: 'error' },
  { message: 'Error! Girlfried not found', variant: 'error' },
  { message: 'AI IS GETTING MORE SENTIENT', variant: 'error' },
];
