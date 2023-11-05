import Box from '@mui/material/Box';
import MuiFormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/system';

import EhCheckbox from '@base/components/Checkbox';
import Typography from '@base/components/Typography';

const FormControl = styled(MuiFormControl)(({ theme }) => ({
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
}));

// default props for all components
const defaultFormGroupProps = {
  row: false,
};

const defaultProps = {
  helperText: '',
  fullWidth: true,
  options: [],
  renderInput: (option, key) => (
    <Box key={key} display="flex" flexDirection="column">
      <FormControlLabel
        key={option.value}
        control={<EhCheckbox name={option.value} sx={{ mr: 0.5 }} />}
        label={option.label}
        sx={{ mr: 4 }}
      />
      {option.description && (
        <Typography color="text.hint" ml={3.5}>
          {option.description}
        </Typography>
      )}
    </Box>
  ),
  FormGroupProps: defaultFormGroupProps,
};

const DefaultCheckboxGroup = ({
  label,
  description,
  helperText,
  tooltip,
  defaultValue,
  options,
  renderInput,
  FormGroupProps,
  ...props
}) => {
  return (
    <FormControl {...props}>
      <Box display="flex">
        {label && <FormLabel>{label}</FormLabel>}
        {tooltip}
      </Box>
      {description && <Typography color="text.hint">{description}</Typography>}
      <FormGroup defaultValue={defaultValue} {...FormGroupProps}>
        {options.map((option, key) => renderInput(option, key))}
      </FormGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
DefaultCheckboxGroup.defaultProps = defaultProps;

const CheckboxGroup = (props) => {
  return <DefaultCheckboxGroup {...props} />;
};

export default CheckboxGroup;
