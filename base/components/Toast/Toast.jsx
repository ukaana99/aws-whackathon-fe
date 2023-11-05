import MuiTypography from '@mui/material/Snackbar';
import { styled } from '@mui/system';

const StyledMuiTypography = styled(MuiTypography)(({ theme, color, variation }) => {
  var textColorLight, textColorDark;
  if (color && variation === 'eh') {
    textColorLight = theme.palette[color][700];
    textColorDark = theme.palette[color][300];
  }
  return {
    ...(variation === 'eh' && {
      ...(theme.palette.mode === 'light' && {
        color: textColorLight,
      }),
      ...(theme.palette.mode === 'dark' && {
        color: textColorDark,
      }),
    }),
  };
});

const Typography = (props) => {
  return <StyledMuiTypography {...props}></StyledMuiTypography>;
};

export default Typography;
