import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';
import { styled } from '@mui/system';

// FlexBox ----------------------------------------- //
export const FlexBox = styled(MuiBox)({
  display: 'flex',
});

export const CenteredFlexBox = styled(FlexBox)({
  justifyContent: 'center',
  alignItems: 'center',
});

export const FullSizeCenteredFlexBox = styled(CenteredFlexBox)({
  width: '100%',
  height: '100%',
});

// Box --------------------------------------------- //
export const Neutral_50Box = styled(MuiBox)(({ theme }) => ({
  backgroundColor: theme.palette.neutral[50],
  ...(theme.palette.mode === 'dark' && {
    backgroundColor: theme.palette.neutral[900],
  }),
}));

// Typography -------------------------------------- //
export const NeutralTypography = styled(MuiTypography)(({ theme }) => ({
  ...(theme.palette.mode === 'light' && {
    color: theme.palette.neutral.dark,
  }),
  ...(theme.palette.mode === 'dark' && {
    color: theme.palette.neutral.light,
  }),
}));

export const Neutral2Typography = styled(MuiTypography)(({ theme }) => ({
  ...(theme.palette.mode === 'light' && {
    color: theme.palette.neutral2.dark,
  }),
  ...(theme.palette.mode === 'dark' && {
    color: theme.palette.neutral2.light,
  }),
}));
