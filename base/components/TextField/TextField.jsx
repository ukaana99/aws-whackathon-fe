import MuiTextField from '@mui/material/TextField';
import { styled } from '@mui/system';

const mt = 24;
const mb = 0;

// Refer https://mui.com/material-ui/react-text-field/
const StyledMuiTextField = styled(MuiTextField)(({ theme, label }) => {
  return {
    marginTop: mt,
    marginBottom: mb,
    ...(!label && {
      marginTop: 0,
    }),
    '& .MuiFormLabel-root': {
      fontWeight: 500,
    },
    '& .MuiFormHelperText-root': {
      marginLeft: 0,
      fontSize: '0.65rem',
      fontWeight: 500,
    },
    '& .MuiFormLabel-asterisk': {
      color: theme.palette.error.main,
    },
  };
});

// default props for all components
const defaultInputLabelProps = {
  shrink: true,
  sx: { transform: `translate(0, -${mt}px) scale(1)` },
};

const defaultInputProps = { notched: false };

const defaultProps = {
  fullWidth: true,
  variant: 'outlined',
  size: 'small',
  placeholder: 'Placeholder',
  helperText: '',
  InputProps: defaultInputProps,
  InputLabelProps: defaultInputLabelProps,
};

const DefaultTextField = (props) => <StyledMuiTextField {...props} />;
DefaultTextField.defaultProps = defaultProps;

const TextField = ({ label, tooltip, InputProps, InputLabelProps, ...props }) => {
  return (
    <DefaultTextField
      label={label}
      InputProps={{ ...defaultInputProps, ...InputProps }}
      InputLabelProps={{ ...defaultInputLabelProps, ...InputLabelProps }}
      {...props}
    />
  );
};

export default TextField;
