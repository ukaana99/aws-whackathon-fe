import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';

import Autocomplete from '@base/components/Autocomplete';
import Avatar from '@base/components/Avatar';
import Badge from '@base/components/Badge';
import EhCheckBox from '@base/components/Checkbox';
import TextField from '@base/components/TextField';
import { stringToColor } from '@base/utils/color.utils';
import { capitalizeFirstLetter as capFL } from '@base/utils/string.utils';

const Search = ({ variation, loading, FormProps, ...props }) => {
  const searchInputProps = {
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon fontSize="small" sx={{ ml: 1 }} />
      </InputAdornment>
    ),
  };

  const NewInputProps = { ...FormProps.InputProps, ...searchInputProps };
  const NewFormProps = { placeholder: 'Search', ...FormProps, InputProps: NewInputProps };

  const defaultRenderOption = (renderProps, option) => (
    <li {...renderProps} key={option.id}>
      {props.getOptionLabel(option) || option.label}
    </li>
  );
  const checkboxRenderOption = (renderProps, option, { selected }) => (
    <li {...renderProps} key={option.id}>
      <EhCheckBox style={{ marginRight: 8 }} checked={selected} />
      {props.getOptionLabel(option) || option.label}
    </li>
  );
  const userRenderOption = (renderProps, option) => (
    <li {...renderProps} key={option.id}>
      <Avatar
        alt={capFL(option.name) || capFL(option.displayName)}
        src={option.avatar || 'broken'}
        sizes="small"
        sx={{
          width: 32,
          height: 32,
          bgcolor: stringToColor(option.name || option.displayName),
        }}
      />
      <Box display="flex" flexDirection="column" ml={1.5}>
        <Typography fontSize={13} mb={0.5}>
          {props.getOptionLabel(option) || option.label}
        </Typography>
        <Typography variant="body2" fontSize={11}>
          {option?.email || option?.mail}
        </Typography>
      </Box>
    </li>
  );

  const defaultRenderTags = (tagValue, getTagProps) =>
    tagValue.map((option, index) => (
      <Badge
        key={index}
        label={props.getOptionLabel(option) || option.label}
        variation="filled2"
        size="medium"
        {...getTagProps({ index })}
      />
    ));
  const checkboxRenderTags = (tagValue, getTagProps) =>
    tagValue.map((option, index) => (
      <Badge
        key={index}
        label={props.getOptionLabel(option) || option.label}
        variation="filled2"
        size="medium"
        {...getTagProps({ index })}
      />
    ));
  const userRenderTags = (tagValue, getTagProps) =>
    tagValue.map((option, index) => (
      <Badge
        key={index}
        label={props.getOptionLabel(option) || option.label}
        variation="filled2"
        size="medium"
        avatar={
          <Avatar
            alt={capFL(option.name) || capFL(option.displayName)}
            src={option.avatar || 'broken'}
            sizes="small"
          />
        }
        sx={{
          '& .MuiAvatar-root': {
            backgroundColor: stringToColor(option.name || option.displayName),
          },
        }}
        {...getTagProps({ index })}
      />
    ));

  const renderInput = (params) => {
    const isSingleUser = variation === 'user' && !props.multiple;
    const value = props?.value;
    return (
      <TextField
        {...params}
        {...NewFormProps}
        inputProps={{
          ...params.inputProps,
          // value: isSingleUser && value ? '' : params.inputProps.value,
        }}
        InputProps={{
          ...params.InputProps,
          ...NewFormProps.InputProps,
          // placeholder: isSingleUser && value ? '' : NewFormProps.placeholder,
          startAdornment: (
            <>
              {NewFormProps.InputProps.startAdornment}
              {params.InputProps.startAdornment}
              {isSingleUser && value && (
                <Avatar
                  alt={capFL(value.name) || capFL(value.displayName)}
                  src={value.avatar || 'broken'}
                  sx={{
                    width: 24,
                    height: 24,
                    fontSize: 14,
                    bgcolor: stringToColor(value.name || value.displayName),
                  }}
                />
              )}
            </>
          ),
          endAdornment: (
            <>
              {loading ? <CircularProgress size={20} /> : null}
              {params.InputProps.endAdornment}
            </>
          ),
        }}
      />
    );
  };

  let renderOption = defaultRenderOption;
  let renderTags = defaultRenderTags;
  switch (variation) {
    case 'checkbox':
      renderOption = checkboxRenderOption;
      renderTags = checkboxRenderTags;
      break;
    case 'user':
      renderOption = userRenderOption;
      renderTags = userRenderTags;
      break;
    default:
      break;
  }
  const filterOptions = (options) => options;

  return (
    <Autocomplete
      // filterOptions={filterOptions}
      renderOption={renderOption}
      renderTags={renderTags}
      renderInput={renderInput}
      {...props}
      forcePopupIcon={false}
      FormProps={NewFormProps}
    />
  );
};

export default Search;
