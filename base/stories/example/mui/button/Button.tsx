import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

// Only include variant, size, and color
type ButtonBaseProps = Pick<
  MuiButtonProps,
  | 'variant'
  | 'size'
  | 'color'
  | 'disabled'
  | 'disableElevation'
  | 'sx'
  | 'children'
  | 'href'
  | 'startIcon'
  | 'endIcon'
  | 'onClick'
>;

// Use all except disableRipple
// type ButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;

export interface ButtonProps extends ButtonBaseProps {
  // label: any;
}

// const Button = ({ label, ...rest }: ButtonProps) => <MuiButton {...rest}>{label}</MuiButton>;
const Button = (props: ButtonProps) => <MuiButton {...props} />;
Button.defaultProps = { children: 'Button Text', variant: 'text' };
export default Button;
