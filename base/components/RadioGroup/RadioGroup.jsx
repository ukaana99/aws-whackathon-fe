import Box from '@mui/material/Box';
import MuiFormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import MuiRadioGroup from '@mui/material/RadioGroup';
import { styled } from '@mui/system';

import EhRadio from '@base/components/Radio';
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
        value={option.value}
        control={<EhRadio sx={{ mr: 0.5 }} />}
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

const DefaultRadioGroup = ({
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
      <MuiRadioGroup defaultValue={defaultValue} {...FormGroupProps}>
        {options.map((option, key) => renderInput(option, key))}
      </MuiRadioGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
DefaultRadioGroup.defaultProps = defaultProps;

const RadioGroup = (props) => {
  return <DefaultRadioGroup {...props} />;
};

export default RadioGroup;
