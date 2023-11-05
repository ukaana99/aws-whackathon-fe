import MuiButton from '@mui/material/Button';
import { styled } from '@mui/system';

const StyledMuiButton = styled(MuiButton)(({ theme, variation, color }) => {
  var shadowColorLight = theme.palette.neutral[200];
  var shadowColorDark = theme.palette.neutral[800];
  if (color) {
    shadowColorLight = theme.palette[color][200];
    shadowColorDark = theme.palette[color][800];
  }
  return {
    ...((variation === 'primary' || variation === 'secondary') && {
      '&:hover': {
        boxShadow: `0 0 0 0.1rem ${shadowColorLight}`,
        ...(theme.palette.mode === 'dark' && {
          boxShadow: `0 0 0 0.1rem ${shadowColorDark}`,
        }),
      },
    }),
    ...(variation === 'secondary' && {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.paper,
      borderColor: theme.palette.neutral[300],
      ...(theme.palette.mode === 'dark' && {
        borderColor: theme.palette.neutral[800],
      }),
    }),
  };
});

const DefaultButton = (props) => <StyledMuiButton {...props} />;
DefaultButton.defaultProps = { children: 'Button Text', variant: 'contained', color: 'primary' };

const Button = (props) => {
  const { variation } = props;

  switch (variation) {
    case 'default':
      return <DefaultButton variant="default" {...props}></DefaultButton>;
    case 'primary':
      return <DefaultButton variant="contained" color="primary" {...props}></DefaultButton>;
    case 'secondary':
      return <DefaultButton variant="outlined" {...props}></DefaultButton>;
    case 'tertiary':
      return <DefaultButton variant="outlined" {...props}></DefaultButton>;
    case 'destructive':
      return <DefaultButton variant="contained" color="error" {...props}></DefaultButton>;
    case 'text':
      return <DefaultButton variant="text" {...props}></DefaultButton>;
    case 'link':
      return <DefaultButton variant="text" {...props}></DefaultButton>;
    default:
      return <DefaultButton {...props}></DefaultButton>;
  }
};

export default Button;
