import MuiAvatar from '@mui/material/Avatar';
import { styled } from '@mui/system';

import Colors from '@base/constants/colors.constant';

const StyledMuiAvatar = styled(MuiAvatar)(({ theme, color, variation }) => {
  if (!color) {
    color = 'neutral2';
  }
  const bgColorLight = theme.palette[color][100];
  const bgColorMain = theme.palette[color][500];
  const bgColorDark = theme.palette[color][800];
  const textColorLight = theme.palette[color][700];
  const textColorDark = theme.palette[color][200];

  return {
    color: Colors.dark.textPrimary,
    backgroundColor: bgColorMain,
    ...(variation === 'eh' && {
      ...(theme.palette.mode === 'light' && {
        color: textColorLight,
        backgroundColor: bgColorLight,
      }),
      ...(theme.palette.mode === 'dark' && {
        color: textColorDark,
        backgroundColor: bgColorDark,
      }),
    }),
  };
});

const Avatar = (props) => {
  return <StyledMuiAvatar {...props}></StyledMuiAvatar>;
};

export default Avatar;
