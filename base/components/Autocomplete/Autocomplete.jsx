import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAutocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

import TextField from '@base/components/TextField';

// default props for all components
const defaultFormProps = {
  placeholder: 'Placeholder',
  helperText: '',
};

const defaultProps = {
  fullWidth: true,
  popupIcon: <ExpandMoreIcon />,
  options: [],
  isOptionEqualToValue: (option, value) => option.value === value.value,
  getOptionLabel: (option) => option.label,
};

const DefaultAutocomplete = ({ loading, FormProps, ...props }) => {
  const renderInput = (params) => (
    <TextField
      {...params}
      {...defaultFormProps}
      {...FormProps}
      InputProps={{
        ...params.InputProps,
        ...FormProps.InputProps,
        endAdornment: (
          <>
            {loading ? <CircularProgress size={20} /> : null}
            {params.InputProps.endAdornment}
          </>
        ),
      }}
    />
  );

  return <MuiAutocomplete renderInput={renderInput} {...props} />;
};
DefaultAutocomplete.defaultProps = defaultProps;

const Autocomplete = (props) => <DefaultAutocomplete {...props} />;

export default Autocomplete;
