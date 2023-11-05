import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import MuiFormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Input from '@mui/material/Input';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';
import { deepmerge } from '@mui/utils';

// Refer https://mui.com/material-ui/react-text-field/
const FormControl = styled(MuiFormControl)(({ theme }) => {});

// default props for all components
const defaultInputProps = { notched: false };

const defaultInputLabelProps = {
  sx: {
    fontWeight: 500,
    '& .MuiFormLabel-asterisk': {
      color: 'error.main',
    },
  },
};

const defaultInputHelperProps = {
  sx: {
    marginLeft: 0,
    fontSize: '0.65rem',
    fontWeight: 500,
  },
};

const defaultProps = {
  fullWidth: true,
  variant: 'outlined',
  size: 'small',
  placeholder: 'Placeholder',
  helperText: '',
  InputProps: defaultInputProps,
  InputLabelProps: defaultInputLabelProps,
  InputHelperProps: defaultInputHelperProps,
};

const DefaultTextField2 = ({
  variant,
  label,
  placeholder,
  helperText,
  tooltip,
  InputProps,
  InputLabelProps,
  InputHelperProps,
  ...props
}) => {
  const renderInput = () => {
    switch (variant) {
      case 'standard':
        return <Input placeholder={placeholder} {...deepmerge(defaultInputProps, InputProps)} />;
      case 'filled':
        return (
          <FilledInput placeholder={placeholder} {...deepmerge(defaultInputProps, InputProps)} />
        );
      case 'outlined':
        return (
          <OutlinedInput placeholder={placeholder} {...deepmerge(defaultInputProps, InputProps)} />
        );
      default:
        return (
          <OutlinedInput placeholder={placeholder} {...deepmerge(defaultInputProps, InputProps)} />
        );
    }
  };

  return (
    <FormControl {...props}>
      <Box display="flex">
        {label && (
          <FormLabel {...deepmerge(defaultInputLabelProps, InputLabelProps)}>{label}</FormLabel>
        )}
        {tooltip}
      </Box>
      <Box height={4} />
      {renderInput()}
      {helperText && (
        <FormHelperText {...deepmerge(defaultInputHelperProps, InputHelperProps)}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};
DefaultTextField2.defaultProps = defaultProps;

const TextField2 = (props) => {
  return <DefaultTextField2 {...props} />;
};

export default TextField2;
