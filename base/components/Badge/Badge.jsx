import Box from '@mui/material/Box';
import MuiChip from '@mui/material/Chip';
import { styled } from '@mui/system';

import { Colors } from '@base/constants';

const Dot = styled(Box)(({ theme, color }) => {
  if (!color) {
    color = 'neutral2';
  }
  const bgColor = theme.palette[color].main;
  return {
    width: 6,
    height: 6,
    borderRadius: '50%',
    backgroundColor: bgColor,
  };
});

const StyledMuiChip = styled(MuiChip)(({ theme, color, variation }) => {
  if (!color) {
    color = 'neutral2';
  }
  const bgColorLight = theme.palette[color][100];
  const bgColorMain = theme.palette[color][500];
  const bgColorDark = theme.palette[color][800];
  const textColorLight = theme.palette[color][700];
  const textColorDark = theme.palette[color][200];

  return {
    fontWeight: 500,
    '& .MuiAvatar-root': {
      color: Colors.dark.textPrimary,
      backgroundColor: bgColorMain,
      ...((variation === 'filled' || variation === 'eh-filled') && {
        ...(theme.palette.mode === 'light' && {
          color: textColorLight,
          backgroundColor: bgColorLight,
        }),
        ...(theme.palette.mode === 'dark' && {
          color: textColorDark,
          backgroundColor: bgColorDark,
        }),
      }),
    },
    ...((variation === 'eh-filled' ||
      variation === 'eh-filled2' ||
      variation === 'eh-outlined') && {
      borderRadius: '4px',
      fontSize: '12px',
    }),
    ...((variation === 'filled2' || variation === 'eh-filled2') && {
      ...(theme.palette.mode === 'light' && {
        color: textColorLight,
        backgroundColor: bgColorLight,
      }),
      ...(theme.palette.mode === 'dark' && {
        color: textColorDark,
        backgroundColor: bgColorDark,
      }),
    }),
    ...(variation === 'eh-light' && {
      fontSize: '12px',
      fontWeight: 500,
      color: theme.palette.text.primary,
      backgroundColor: 'transparent',
      '& .MuiChip-icon': {
        color: theme.palette[color][700],
      },
    }),
  };
});

// default props for all components
const defaultProps = {
  size: 'small',
  label: 'Status',
  variant: 'filled',
};

const DefaultChip = (props) => <StyledMuiChip {...props} />;
DefaultChip.defaultProps = defaultProps;

const Badge = (props) => {
  const { variation } = props;

  switch (variation) {
    case 'filled':
      return <DefaultChip variant="filled" {...props}></DefaultChip>;
    case 'filled2':
      return <DefaultChip variant="filled" {...props}></DefaultChip>;
    case 'outlined':
      return <DefaultChip variant="outlined" {...props}></DefaultChip>;
    case 'eh-filled':
      return <DefaultChip variant="filled" {...props}></DefaultChip>;
    case 'eh-filled2':
      return <DefaultChip variant="filled" {...props}></DefaultChip>;
    case 'eh-outlined':
      return <DefaultChip variant="outlined" {...props}></DefaultChip>;
    case 'eh-light':
      return !props.avatar ? (
        <DefaultChip icon={<Dot color={props.color}></Dot>} {...props}></DefaultChip>
      ) : (
        <DefaultChip {...props}></DefaultChip>
      );
    case 'default':
    default:
      return <DefaultChip {...props}></DefaultChip>;
  }
};

export default Badge;
