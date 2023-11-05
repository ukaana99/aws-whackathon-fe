import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';

import Autocomplete from '@base/components/Autocomplete';
import Avatar from '@base/components/Avatar';
import Badge from '@base/components/Badge';
import Breadcrumbs from '@base/components/Breadcrumbs';
import Button from '@base/components/Button';
import EhCheckbox from '@base/components/Checkbox';
import CheckboxGroup from '@base/components/CheckboxGroup';
import Fab from '@base/components/Fab';
import EhRadio from '@base/components/Radio';
import RadioGroup from '@base/components/RadioGroup';
import TextField from '@base/components/TextField';
import TextField2 from '@base/components/TextField2';
import Tooltip from '@base/components/Tooltip';
import Typography from '@base/components/Typography';
import { enqueueSnackbar } from 'notistack';

import TextFieldBox from '@/components/contents/TextFieldBox';
import Dropzone from '@/components/form/Dropzone';
import Search from '@/components/form/Search';
import PageLayout from '@/layouts/PageLayout';

function Playground() {
  function TypographySection() {
    function TypographyOverview() {
      return (
        <Box my={2}>
          <Typography variant="h5">Overview</Typography>
          <Box my={1}>
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="h3">Heading 3</Typography>
            <Typography variant="h4">Heading 4</Typography>
            <Typography variant="h5">Heading 5</Typography>
            <Typography variant="h6">Heading 6</Typography>
            <Typography variant="subtitle1">Subtitle 1</Typography>
            <Typography variant="subtitle2">Subtitle 2</Typography>
            <Typography variant="body1">Body 1</Typography>
            <Typography variant="body2">Body 2</Typography>
            <Typography variant="caption">Caption</Typography>
            <Typography>Default</Typography>
          </Box>
        </Box>
      );
    }

    function TypographyFontWeight() {
      return (
        <Box my={2}>
          <Typography variant="h5">Font Weight</Typography>
          <Box my={1}>
            <Typography fontWeight={100}>Font Weight 100</Typography>
            <Typography fontWeight={200}>Font Weight 200</Typography>
            <Typography fontWeight={300}>Font Weight 300</Typography>
            <Typography fontWeight={400}>Font Weight 400</Typography>
            <Typography fontWeight={500}>Font Weight 500</Typography>
            <Typography fontWeight={600}>Font Weight 600</Typography>
            <Typography fontWeight={700}>Font Weight 700</Typography>
            <Typography fontWeight={800}>Font Weight 800</Typography>
            <Typography fontWeight={900}>Font Weight 900</Typography>
          </Box>
        </Box>
      );
    }

    function TypographyColors() {
      return (
        <Box my={2}>
          <Typography variant="h5">Colors</Typography>
          <Box my={1}>
            <Typography color="text.primary">Text Primary</Typography>
            <Typography color="text.secondary">Text Secondary</Typography>
            <Typography color="text.hint">Text Hint</Typography>
            <Typography color="text.disabled">Text Disabled</Typography>
          </Box>
          <Box my={1}>
            <Typography color="primary">Theme Primary</Typography>
            <Typography color="secondary">Theme Secondary</Typography>
            <Typography color="info.main">Theme Information</Typography>
            <Typography color="success.main">Theme Success</Typography>
            <Typography color="warning.main">Theme Warning</Typography>
            <Typography color="error.main">Theme Error</Typography>
          </Box>
        </Box>
      );
    }

    function TypographyThemed() {
      return (
        <Box my={2}>
          <Typography variant="h5">Dark/Light Themed Colors</Typography>

          <Box my={1}>
            <Typography variation="eh" color="primary">
              Dark/Light Primary
            </Typography>
            <Typography variation="eh" color="secondary">
              Dark/Light Secondary
            </Typography>
            <Typography variation="eh" color="info">
              Dark/Light Information
            </Typography>
            <Typography variation="eh" color="success">
              Dark/Light Success
            </Typography>
            <Typography variation="eh" color="warning">
              Dark/Light Warning
            </Typography>
            <Typography variation="eh" color="error">
              Dark/Light Error
            </Typography>
          </Box>
        </Box>
      );
    }

    return (
      <Box marginBottom={4}>
        <Typography variant="h4">Typography</Typography>
        <TypographyOverview />
        <TypographyFontWeight />
        <TypographyColors />
        <TypographyThemed />
      </Box>
    );
  }

  function ButtonSection() {
    function ButtonOverview() {
      return (
        <Box my={2}>
          <Typography variant="h5">Overview</Typography>
          <Box my={1}>
            <Button variation="default"></Button>
            <Button variation="primary"></Button>
            <Button variation="secondary"></Button>
            <Button variant="outlined"></Button>
            <Button variation="destructive"></Button>
            <Button variation="text"></Button>
            <Fab>
              <AddIcon sx={{ mr: 1 }} />
              Text Button
            </Fab>
          </Box>
          <Box my={1}>
            <Button variation="default" disabled></Button>
            <Button variation="primary" disabled></Button>
            <Button variation="secondary" disabled></Button>
            <Button variant="outlined" disabled></Button>
            <Button variation="destructive" disabled></Button>
            <Button variation="text" disabled></Button>
            <Fab disabled>
              <AddIcon sx={{ mr: 1 }} />
              Text Button
            </Fab>
          </Box>
        </Box>
      );
    }

    function ButtonSizes() {
      return (
        <Box my={2}>
          <Typography variant="h5">Sizes</Typography>
          <Box my={1}>
            <Button variation="primary" size="small"></Button>
            <Button variation="secondary" size="small"></Button>
            <Button variant="outlined" size="small"></Button>
            <Button variation="destructive" size="small"></Button>
            <Button vartypeiant="text" size="small"></Button>
            <Fab size="small">
              <AddIcon sx={{ mr: 1 }} />
              Text Button
            </Fab>
          </Box>
          <Box my={1}>
            <Button variation="primary" size="medium"></Button>
            <Button variation="secondary" size="medium"></Button>
            <Button variant="outlined" size="medium"></Button>
            <Button variation="destructive" size="medium"></Button>
            <Button variation="text" size="medium"></Button>
            <Fab size="medium">
              <AddIcon sx={{ mr: 1 }} />
              Text Button
            </Fab>
          </Box>
          <Box my={1}>
            <Button variation="primary" size="large"></Button>
            <Button variation="secondary" size="large"></Button>
            <Button variant="outlined" size="large"></Button>
            <Button variation="destructive" size="large"></Button>
            <Button variation="text" size="large"></Button>
            <Fab size="large">
              <AddIcon sx={{ mr: 1 }} />
              Text Button
            </Fab>
          </Box>
        </Box>
      );
    }

    function ButtonColors() {
      return (
        <Box my={2}>
          <Typography variant="h5">Colors</Typography>
          <Box my={1}>
            <Button variation="primary" color="primary"></Button>
            <Button color="secondary"></Button>
            <Button color="info"></Button>
            <Button color="success"></Button>
            <Button color="warning"></Button>
            <Button color="error"></Button>
          </Box>
          <Box my={1}>
            <Button variation="secondary" color="primary"></Button>
            <Button variation="secondary" color="secondary"></Button>
            <Button variation="secondary" color="info"></Button>
            <Button variation="secondary" color="success"></Button>
            <Button variation="secondary" color="warning"></Button>
            <Button variation="secondary" color="error"></Button>
          </Box>
          <Box my={1}>
            <Button variant="outlined" color="primary"></Button>
            <Button variant="outlined" color="secondary"></Button>
            <Button variant="outlined" color="info"></Button>
            <Button variant="outlined" color="success"></Button>
            <Button variant="outlined" color="warning"></Button>
            <Button variant="outlined" color="error"></Button>
          </Box>
          <Box my={1}>
            <Button variation="text" color="primary"></Button>
            <Button variation="text" color="secondary"></Button>
            <Button variation="text" color="info"></Button>
            <Button variation="text" color="success"></Button>
            <Button variation="text" color="warning"></Button>
            <Button variation="text" color="error"></Button>
          </Box>
          <Box my={1}>
            <Fab size="medium" color="primary">
              <AddIcon sx={{ mr: 1 }} />
              Text Button
            </Fab>
            <Fab size="medium" color="secondary">
              <AddIcon sx={{ mr: 1 }} />
              Text Button
            </Fab>
            <Fab size="medium" color="info">
              <AddIcon sx={{ mr: 1 }} />
              Text Button
            </Fab>
            <Fab size="medium" color="success">
              <AddIcon sx={{ mr: 1 }} />
              Text Button
            </Fab>
            <Fab size="medium" color="warning">
              <AddIcon sx={{ mr: 1 }} />
              Text Button
            </Fab>
            <Fab size="medium" color="error">
              <AddIcon sx={{ mr: 1 }} />
              Text Button
            </Fab>
          </Box>
        </Box>
      );
    }

    return (
      <Box marginBottom={4}>
        <Typography variant="h4">Button</Typography>
        <ButtonOverview />
        <ButtonSizes />
        <ButtonColors />
      </Box>
    );
  }

  function AvatarSection() {
    function AvatarOverview() {
      return (
        <Box my={2}>
          <Typography variant="h5">Overview</Typography>
          <Box my={1} display="flex">
            <Avatar alt="Remy Sharp" src="" />
            <Avatar alt="Travis Howard" src="" />
            <Avatar alt="Cindy Baker" src="" />
          </Box>
          <Box my={1} display="flex">
            <Avatar>A</Avatar>
            <Avatar color="primary">B</Avatar>
            <Avatar color="secondary">C</Avatar>
            <Avatar color="info">D</Avatar>
            <Avatar color="success">E</Avatar>
            <Avatar color="warning">F</Avatar>
            <Avatar color="error">G</Avatar>
            <Avatar color="neutral">H</Avatar>
            <Avatar color="neutral2">IJ</Avatar>
          </Box>
          <Box my={1} display="flex">
            <Avatar variation="eh">A</Avatar>
            <Avatar variation="eh" color="primary">
              B
            </Avatar>
            <Avatar variation="eh" color="secondary">
              C
            </Avatar>
            <Avatar variation="eh" color="info">
              D
            </Avatar>
            <Avatar variation="eh" color="success">
              E
            </Avatar>
            <Avatar variation="eh" color="warning">
              F
            </Avatar>
            <Avatar variation="eh" color="error">
              G
            </Avatar>
            <Avatar variation="eh" color="neutral">
              H
            </Avatar>
            <Avatar variation="eh" color="neutral2">
              IJ
            </Avatar>
          </Box>
        </Box>
      );
    }

    return (
      <Box marginBottom={4}>
        <Typography variant="h4">Avatar</Typography>
        <AvatarOverview />
      </Box>
    );
  }

  function BadgeSection() {
    function BadgeOverview() {
      return (
        <Box my={2}>
          <Typography variant="h5">Overview</Typography>
          <Box my={1}>
            <Badge variation="filled" color="primary"></Badge>
            <Badge variation="filled2" color="primary"></Badge>
            <Badge variation="outlined" color="primary"></Badge>
            <Badge variation="eh-filled" color="primary"></Badge>
            <Badge variation="eh-filled2" color="primary"></Badge>
            <Badge variation="eh-outlined" color="primary"></Badge>
            <Badge variation="eh-light" color="primary"></Badge>
          </Box>
        </Box>
      );
    }

    function BadgeSizes() {
      return (
        <Box my={2}>
          <Typography variant="h5">Sizes</Typography>
          <Box my={1}>
            <Badge variation="filled" color="primary" size="small"></Badge>
            <Badge variation="filled2" color="primary" size="small"></Badge>
            <Badge variation="outlined" color="primary" size="small"></Badge>
            <Badge variation="eh-filled" color="primary" size="small"></Badge>
            <Badge variation="eh-filled2" color="primary" size="small"></Badge>
            <Badge variation="eh-outlined" color="primary" size="small"></Badge>
            <Badge variation="eh-light" color="primary" size="small"></Badge>
          </Box>
          <Box my={1}>
            <Badge variation="filled" color="primary" size="medium"></Badge>
            <Badge variation="filled2" color="primary" size="medium"></Badge>
            <Badge variation="outlined" color="primary" size="medium"></Badge>
            <Badge variation="eh-filled" color="primary" size="medium"></Badge>
            <Badge variation="eh-filled2" color="primary" size="medium"></Badge>
            <Badge variation="eh-outlined" color="primary" size="medium"></Badge>
            <Badge variation="eh-light" color="primary" size="medium"></Badge>
          </Box>
        </Box>
      );
    }

    function BadgeColors() {
      return (
        <Box my={2}>
          <Typography variant="h5">Colors</Typography>
          <Box my={1}>
            <Badge variation="filled" color="primary"></Badge>
            <Badge variation="filled" color="secondary"></Badge>
            <Badge variation="filled" color="info"></Badge>
            <Badge variation="filled" color="success"></Badge>
            <Badge variation="filled" color="warning"></Badge>
            <Badge variation="filled" color="error"></Badge>
          </Box>
          <Box my={1}>
            <Badge variation="filled2" color="primary"></Badge>
            <Badge variation="filled2" color="secondary"></Badge>
            <Badge variation="filled2" color="info"></Badge>
            <Badge variation="filled2" color="success"></Badge>
            <Badge variation="filled2" color="warning"></Badge>
            <Badge variation="filled2" color="error"></Badge>
          </Box>
          <Box my={1}>
            <Badge variation="outlined" color="primary"></Badge>
            <Badge variation="outlined" color="secondary"></Badge>
            <Badge variation="outlined" color="info"></Badge>
            <Badge variation="outlined" color="success"></Badge>
            <Badge variation="outlined" color="warning"></Badge>
            <Badge variation="outlined" color="error"></Badge>
          </Box>
          <Box my={1}>
            <Badge variation="eh-filled" color="primary"></Badge>
            <Badge variation="eh-filled" color="secondary"></Badge>
            <Badge variation="eh-filled" color="info"></Badge>
            <Badge variation="eh-filled" color="success"></Badge>
            <Badge variation="eh-filled" color="warning"></Badge>
            <Badge variation="eh-filled" color="error"></Badge>
          </Box>
          <Box my={1}>
            <Badge variation="eh-filled2" color="primary"></Badge>
            <Badge variation="eh-filled2" color="secondary"></Badge>
            <Badge variation="eh-filled2" color="info"></Badge>
            <Badge variation="eh-filled2" color="success"></Badge>
            <Badge variation="eh-filled2" color="warning"></Badge>
            <Badge variation="eh-filled2" color="error"></Badge>
          </Box>
          <Box my={1}>
            <Badge variation="eh-outlined" color="primary"></Badge>
            <Badge variation="eh-outlined" color="secondary"></Badge>
            <Badge variation="eh-outlined" color="info"></Badge>
            <Badge variation="eh-outlined" color="success"></Badge>
            <Badge variation="eh-outlined" color="warning"></Badge>
            <Badge variation="eh-outlined" color="error"></Badge>
          </Box>
          <Box my={1}>
            <Badge variation="eh-light"></Badge>
            <Badge variation="eh-light" color="primary"></Badge>
            <Badge variation="eh-light" color="secondary"></Badge>
            <Badge variation="eh-light" color="info"></Badge>
            <Badge variation="eh-light" color="success"></Badge>
            <Badge variation="eh-light" color="warning"></Badge>
            <Badge variation="eh-light" color="error"></Badge>
          </Box>
        </Box>
      );
    }

    function BadgeOthers() {
      return (
        <Box my={2}>
          <Typography variant="h5">Others</Typography>
          <Box my={1}>
            <Badge
              label="User"
              variation="filled"
              avatar={<Avatar alt="User" src="https://i.pravatar.cc/300?img=1" />}
            />
            <Badge label="User" variation="filled" avatar={<Avatar alt="User" src="broken" />} />
            <Badge
              label="User"
              variation="filled2"
              avatar={<Avatar alt="User" src="https://i.pravatar.cc/300?img=1" />}
            />
            <Badge label="User" variation="filled2" avatar={<Avatar alt="User" />} />
            <Badge
              label="User"
              variation="outlined"
              size="medium"
              avatar={<Avatar alt="User" src="https://i.pravatar.cc/300?img=1" />}
            />
            <Badge
              label="User"
              variation="outlined"
              size="medium"
              avatar={<Avatar alt="User" src="broken" />}
            />
            <Badge label="User" variation="eh-filled" avatar={<Avatar alt="User" src="broken" />} />
            <Badge label="User" variation="eh-filled2" avatar={<Avatar alt="User" />} />
            <Badge
              label="User"
              variation="eh-filled2"
              size="medium"
              avatar={<Avatar alt="User" src="https://i.pravatar.cc/300?img=1" />}
            />
            <Badge label="User" variation="eh-light" avatar={<Avatar alt="User" src="broken" />} />
            <Badge
              label="User"
              variation="eh-light"
              size="medium"
              avatar={<Avatar alt="User" src="https://i.pravatar.cc/300?img=1" />}
            />
          </Box>
          <Box my={1}>
            <Badge
              label="User"
              variation="filled"
              color="primary"
              avatar={<Avatar alt="User" src="https://i.pravatar.cc/300?img=1" />}
            />
            <Badge
              label="User"
              variation="filled"
              color="primary"
              avatar={<Avatar alt="User" src="broken" />}
            />
            <Badge
              label="User"
              variation="filled2"
              color="primary"
              avatar={<Avatar alt="User" src="https://i.pravatar.cc/300?img=1" />}
            />
            <Badge
              label="User"
              variation="filled2"
              color="primary"
              avatar={<Avatar alt="User" />}
            />
            <Badge
              label="User"
              variation="outlined"
              color="primary"
              size="medium"
              avatar={<Avatar alt="User" src="https://i.pravatar.cc/300?img=1" />}
            />
            <Badge
              label="User"
              variation="outlined"
              color="primary"
              size="medium"
              avatar={<Avatar alt="User" src="broken" />}
            />
            <Badge
              label="User"
              variation="eh-filled"
              color="primary"
              avatar={<Avatar alt="User" src="broken" />}
            />
            <Badge
              label="User"
              variation="eh-filled2"
              color="primary"
              avatar={<Avatar alt="User" />}
            />
            <Badge
              label="User"
              variation="eh-filled2"
              color="primary"
              size="medium"
              avatar={<Avatar alt="User" src="https://i.pravatar.cc/300?img=1" />}
            />
            <Badge
              label="User"
              variation="eh-light"
              color="primary"
              avatar={<Avatar alt="User" src="broken" />}
            />
            <Badge
              label="User"
              variation="eh-light"
              color="primary"
              size="medium"
              avatar={<Avatar alt="User" src="https://i.pravatar.cc/300?img=1" />}
            />
          </Box>
          <Box my={1}>
            <Badge
              label="User"
              variation="filled"
              color="info"
              avatar={<Avatar alt="User" src="https://i.pravatar.cc/300?img=1" />}
            />
            <Badge
              label="User"
              variation="filled"
              color="info"
              avatar={<Avatar alt="User" src="broken" />}
            />
            <Badge
              label="User"
              variation="filled2"
              color="info"
              avatar={<Avatar alt="User" src="https://i.pravatar.cc/300?img=1" />}
            />
            <Badge label="User" variation="filled2" color="info" avatar={<Avatar alt="User" />} />
            <Badge
              label="User"
              variation="outlined"
              color="info"
              size="medium"
              avatar={<Avatar alt="User" src="https://i.pravatar.cc/300?img=1" />}
            />
            <Badge
              label="User"
              variation="outlined"
              color="info"
              size="medium"
              avatar={<Avatar alt="User" src="broken" />}
            />
            <Badge
              label="User"
              variation="eh-filled"
              color="info"
              avatar={<Avatar alt="User" src="broken" />}
            />
            <Badge
              label="User"
              variation="eh-filled2"
              color="info"
              avatar={<Avatar alt="User" />}
            />
            <Badge
              label="User"
              variation="eh-filled2"
              color="info"
              size="medium"
              avatar={<Avatar alt="User" src="https://i.pravatar.cc/300?img=1" />}
            />
            <Badge
              label="User"
              variation="eh-light"
              color="info"
              avatar={<Avatar alt="User" src="broken" />}
            />
            <Badge
              label="User"
              variation="eh-light"
              color="info"
              size="medium"
              avatar={<Avatar alt="User" src="https://i.pravatar.cc/300?img=1" />}
            />
          </Box>
        </Box>
      );
    }

    return (
      <Box marginBottom={4}>
        <Typography variant="h4">Badge</Typography>
        <BadgeOverview />
        <BadgeSizes />
        <BadgeColors />
        <BadgeOthers />
      </Box>
    );
  }

  function FormSection() {
    function FormTextfield() {
      return (
        <Box my={2}>
          <Typography variant="h5">Textfield</Typography>
          <Box my={1}>
            <TextField
              required
              label="Text Field"
              placeholder="Enter value"
              tooltip={<Tooltip title="Text field" />}
              sx={{ mb: 2 }}
            />
            <TextField2
              required
              label="Text Field 2"
              placeholder="Enter value"
              tooltip={<Tooltip title="Text field" />}
              sx={{ mb: 2 }}
            />
            <Grid container spacing={2}>
              <Grid xs={6}>
                <TextField required label="Text Field" sx={{ mb: 2 }} />
                <TextField2 required label="Text Field 2" sx={{ mb: 2 }} />
              </Grid>
              <Grid xs={6}>
                <TextField2 required label="Text Field 2" sx={{ mb: 2 }} />
                <TextField required label="Text Field" sx={{ mb: 2 }} />
              </Grid>
            </Grid>
            <TextFieldBox mb={2}>
              <TextField
                required
                label="Text Field"
                helperText="Helper text"
                InputProps={{
                  multiline: true,
                  rows: 6,
                  sx: { backgroundColor: 'background.paper' },
                }}
              />
            </TextFieldBox>
            <TextFieldBox mb={2}>
              <TextField2
                required
                label="Text Field 2"
                helperText="Helper text"
                InputProps={{
                  multiline: true,
                  rows: 6,
                  sx: { backgroundColor: 'background.paper' },
                }}
              />
            </TextFieldBox>
          </Box>
        </Box>
      );
    }

    function FormGroups() {
      return (
        <Box my={2}>
          <Typography variant="h5">Form Groups</Typography>
          <Box my={1}>
            <RadioGroup
              required
              label="Radio Group (row)"
              helperText="Helper text"
              tooltip={<Tooltip title="Radio Group" />}
              options={[
                { label: 'Applicable', value: '1' },
                { label: 'Not Applicable', value: '2' },
              ]}
              FormGroupProps={{ row: true }}
              sx={{ mb: 2 }}
            />
            <CheckboxGroup
              label="Checkbox Group (row)"
              helperText="Helper text"
              tooltip={<Tooltip title="Checkbox Group" />}
              options={[
                { label: 'Applicable', value: '1' },
                { label: 'Not Applicable', value: '2' },
              ]}
              FormGroupProps={{ row: true }}
              sx={{ mb: 2 }}
            />
            <RadioGroup
              label="Radio Group (with description)"
              description="Description"
              helperText="Helper text"
              options={[
                { label: 'Applicable', description: 'Description', value: '1' },
                { label: 'Not Applicable', description: 'Description', value: '2' },
              ]}
              sx={{ mb: 2 }}
            />
            <CheckboxGroup
              label="Checkbox Group (with description)"
              description="Description"
              helperText="Helper text"
              options={[
                { label: 'Applicable', description: 'Description', value: '1' },
                { label: 'Not Applicable', description: 'Description', value: '2' },
              ]}
              sx={{ mb: 2 }}
            />
          </Box>
        </Box>
      );
    }

    function FormDropzone() {
      return (
        <Box my={2}>
          <Typography variant="h5">Dropzone</Typography>
          <Box my={1}>
            <Dropzone
              accept={{
                'image/*': ['.jpg', '.jpeg', '.png'],
                'application/pdf': ['.pdf'],
              }}
              description="JPG, PNG or PDF, file size no more than 10MB"
              onDropAccepted={(acceptedFiles, event) => {}}
              onDropRejected={(rejection, event) => {}}
            />
          </Box>
        </Box>
      );
    }

    function FormAutocomplete() {
      return (
        <Box my={2}>
          <Typography variant="h5">Autocomplete</Typography>
          <Box my={1}>
            <Autocomplete
              options={[
                { label: 'Value 1', value: '1' },
                { label: 'Value 2', value: '2' },
              ]}
              FormProps={{
                label: 'Autocomplete',
                placeholder: 'Select value',
                helperText: 'Helper text',
              }}
              sx={{ mb: 2 }}
            />
            <Autocomplete
              multiple
              options={[
                { label: 'Value 1', value: '1' },
                { label: 'Value 2', value: '2' },
              ]}
              FormProps={{
                label: 'Autocomplete multiple',
                placeholder: 'Select value',
                helperText: 'Helper text',
              }}
              sx={{ mb: 2 }}
            />
            <Search
              options={[
                {
                  id: 1,
                  name: 'Rushdeen Jamily',
                  email: 'rushdeen@petronas.com',
                  avatar: 'https://i.pravatar.cc/300?img=1',
                },
                {
                  id: 2,
                  name: 'Joe Flizzow',
                  email: 'flizzow@petronas.com',
                  avatar: 'https://i.pravatar.cc/300?img=2',
                },
              ]}
              getOptionLabel={(option) => option.name}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              FormProps={{
                label: 'Search Autocomplete - Default',
                placeholder: 'Search name or email address',
                helperText: 'Helper text',
              }}
              sx={{ mb: 2 }}
            />
            <Search
              variation="checkbox"
              options={[
                {
                  id: 1,
                  name: 'Rushdeen Jamily',
                  email: 'rushdeen@petronas.com',
                  avatar: 'https://i.pravatar.cc/300?img=1',
                },
                {
                  id: 2,
                  name: 'Joe Flizzow',
                  email: 'flizzow@petronas.com',
                  avatar: 'https://i.pravatar.cc/300?img=2',
                },
              ]}
              getOptionLabel={(option) => option.name}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              FormProps={{
                label: 'Search Autocomplete - Checkbox',
                placeholder: 'Search name or email address',
                helperText: 'Helper text',
              }}
              sx={{ mb: 2 }}
            />
            <Search
              multiple
              variation="checkbox"
              options={[
                {
                  id: 1,
                  name: 'Rushdeen Jamily',
                  email: 'rushdeen@petronas.com',
                  avatar: 'https://i.pravatar.cc/300?img=1',
                },
                {
                  id: 2,
                  name: 'Joe Flizzow',
                  email: 'flizzow@petronas.com',
                  avatar: 'https://i.pravatar.cc/300?img=2',
                },
              ]}
              getOptionLabel={(option) => option.name}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              FormProps={{
                label: 'Search Autocomplete multiple - Checkbox',
                placeholder: 'Search name or email address',
                helperText: 'Helper text',
              }}
              sx={{ mb: 2 }}
            />
            <Search
              variation="user"
              options={[
                {
                  id: 1,
                  name: 'Rushdeen Jamily',
                  email: 'rushdeen@petronas.com',
                  avatar: 'https://i.pravatar.cc/300?img=1',
                },
                {
                  id: 2,
                  name: 'Joe Flizzow',
                  email: 'flizzow@petronas.com',
                  avatar: 'https://i.pravatar.cc/300?img=2',
                },
                {
                  id: 3,
                  name: 'Syaril',
                  email: 'syaril@petronas.com',
                  avatar: 'broken',
                },
              ]}
              getOptionLabel={(option) => option.name}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              FormProps={{
                label: 'Search Autocomplete - User',
                placeholder: 'Search name or email address',
                helperText: 'Helper text',
              }}
              sx={{ mb: 2 }}
            />
            <Search
              multiple
              variation="user"
              options={[
                {
                  id: 1,
                  name: 'Rushdeen Jamily',
                  email: 'rushdeen@petronas.com',
                  avatar: 'https://i.pravatar.cc/300?img=1',
                },
                {
                  id: 2,
                  name: 'Joe Flizzow',
                  email: 'flizzow@petronas.com',
                  avatar: 'https://i.pravatar.cc/300?img=2',
                },
                {
                  id: 3,
                  name: 'Syaril',
                  email: 'syaril@petronas.com',
                  avatar: 'broken',
                },
              ]}
              getOptionLabel={(option) => option.name}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              FormProps={{
                label: 'Search Autocomplete multiple - User',
                placeholder: 'Search name or email address',
                helperText: 'Helper text',
              }}
              sx={{ mb: 2 }}
            />
          </Box>
        </Box>
      );
    }

    return (
      <Box marginBottom={4}>
        <Typography variant="h4">Form</Typography>
        <FormTextfield />
        <FormGroups />
        <FormDropzone />
        <FormAutocomplete />
      </Box>
    );
  }

  function ToastSection() {
    function ToastOverview() {
      const handleClick = (message, variant) => enqueueSnackbar(message, { variant: variant });

      return (
        <Box my={2}>
          <Typography variant="h5">Overview</Typography>
          <Box my={1}>
            <Button variation="text" color="primary" onClick={() => handleClick('Default')}>
              Show snackbar
            </Button>
            <Button
              variation="text"
              color="info"
              onClick={() => handleClick('Information', 'info')}
            >
              Show info snackbar
            </Button>
            <Button
              variation="text"
              color="success"
              onClick={() => handleClick('Success', 'success')}
            >
              Show success snackbar
            </Button>
            <Button
              variation="text"
              color="warning"
              onClick={() => handleClick('Warning', 'warning')}
            >
              Show warning snackbar
            </Button>
            <Button variation="text" color="error" onClick={() => handleClick('Error', 'error')}>
              Show error snackbar
            </Button>
          </Box>
        </Box>
      );
    }

    return (
      <Box marginBottom={4}>
        <Typography variant="h4">Toast</Typography>
        <ToastOverview />
      </Box>
    );
  }

  function BreadcrumbsSection() {
    function BreadcrumbsOverview() {
      return (
        <Box my={2}>
          <Typography variant="h5">Overview</Typography>
          <Box my={1}>
            <Breadcrumbs  routes={{}}/>
          </Box>
        </Box>
      );
    }

    function BreadcrumbsCustomPath() {
      return (
        <Box my={2}>
          <Typography variant="h5">Custom Path</Typography>
          <Box my={1}>
            <Breadcrumbs routes={{}} />
          </Box>
        </Box>
      );
    }

    return (
      <Box marginBottom={4}>
        <Typography variant="h4">Breadcrumbs</Typography>
        <BreadcrumbsOverview />
        <BreadcrumbsCustomPath />
      </Box>
    );
  }

  function ContentSection() {
    return (
      <Box minHeight={640} bgcolor="background.paper" p={4} borderRadius="8px" flexGrow={1}>
        <TypographySection />
        <Divider />
        <Box height={20} />
        <AvatarSection />
        <Divider />
        <Box height={20} />
        <BadgeSection />
        <Divider />
        <Box height={20} />
        <ButtonSection />
        <Divider />
        <Box height={20} />
        <FormSection />
        <Divider />
        <Box height={20} />
        <ToastSection />
        <Divider />
        <Box height={20} />
        <BreadcrumbsSection />
      </Box>
    );
  }

  function LinkSection() {
    return (
      <Box width={120} borderRadius="8px">
        <Box>
          <Typography variant="subtitle1" color="primary">
            Contents
          </Typography>
          <Typography>Typography</Typography>
          <Typography>Avatar</Typography>
          <Typography>Badge</Typography>
          <Typography>Button</Typography>
          <Typography>Form</Typography>
          <Typography>Toast</Typography>
          <Typography>Breadcrumb</Typography>
        </Box>
      </Box>
    );
  }

  return (
    <PageLayout title="Playground">
      <Box display="flex" flexGrow={1}>
        <ContentSection flexGrow={1} />
        <Box width={48}></Box>
        <LinkSection />
      </Box>
    </PageLayout>
  );
}

export default Playground;
