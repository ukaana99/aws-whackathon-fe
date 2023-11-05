import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

import { Meta, StoryFn } from '@storybook/react';

import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  // More on MUI storybook: https://storybook.js.org/recipes/@mui/material
  title: 'MUI Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Overview = Template.bind({});

export const BasicButton = {
  name: 'Basic Button',
  render: () => (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  ),
};

export const TextButton = {
  name: 'Text Button',
  render: () => (
    <Stack spacing={2} direction="row">
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-button">Link</Button>
    </Stack>
  ),
};

export const ContainedButton = {
  name: 'Contained Button',
  render: () => (
    <Stack spacing={2} direction="row">
      <Button variant="contained">Primary</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-button">
        Link
      </Button>
    </Stack>
  ),
};

export const OutlinedButton = {
  name: 'Outlined Button',
  render: () => (
    <Stack spacing={2} direction="row">
      <Button variant="outlined">Primary</Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" href="#outlined-button">
        Link
      </Button>
    </Stack>
  ),
};

export const Colors = {
  name: 'Colors',
  render: () => (
    <Stack spacing={2} direction="column">
      <Stack spacing={2} direction="row">
        <Button variant="text">Primary</Button>
        <Button variant="contained">Primary</Button>

        <Button variant="outlined">Primary</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="text" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="text" color="info">
          Information
        </Button>
        <Button variant="contained" color="info">
          Information
        </Button>
        <Button variant="outlined" color="info">
          Information
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="text" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="outlined" color="warning">
          Warning
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="text" color="error">
          Error
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Stack>
    </Stack>
  ),
};

export const Sizes = {
  name: 'Sizes',
  render: () => (
    <Stack spacing={2} direction="column">
      <Stack spacing={2} direction="row">
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" size="small">
          Small
        </Button>
        <Button variant="outlined" size="medium">
          Medium
        </Button>
        <Button variant="outlined" size="large">
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
    </Stack>
  ),
};

export const ButtonsWithIconsAndLabel = {
  name: 'Buttons with icons and label',
  render: () => (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
  ),
};
