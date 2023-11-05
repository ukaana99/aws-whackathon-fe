import { useContext, useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MuiDivider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/system';

import { blue, blueGray, emeraldGreen, gray, green, purple, red, yellow } from '@base/colors';

import PageLayout from '@/layouts/PageLayout';
import { LayoutContext } from '@/providers/Layout';

const Divider = styled(MuiDivider)({
  marginTop: 20,
  marginBottom: 20,
});

const ColorCard = (props) => {
  const { shade, textColor, backgroundColor } = props;

  return (
    <Card>
      <CardContent sx={{ backgroundColor: backgroundColor }}>
        <Typography variant="subtitle1" sx={{ color: textColor }}>
          {backgroundColor}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="subtitle2">{shade}</Typography>
        <Grid container>
          <Grid xs={6}>
            <Typography variant="body2" color="text.secondary">
              Text
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Typography variant="body2" color="text.secondary">
              {textColor}
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid xs={6}>
            <Typography variant="body2" color="text.secondary">
              Bg
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Typography variant="body2" color="text.secondary">
              {backgroundColor}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const ColorPalette = (props) => {
  const { title, color, textColorShade = 700, contrastPosition = 4 } = props;
  const contrastText = color[textColorShade];

  const layoutContext = useContext(LayoutContext);
  const themeMode = layoutContext.themeMode;
  const [palette, setPalette] = useState(Object.entries(color).slice(0, 10));

  useEffect(() => {
    themeMode === 'light'
      ? setPalette(Object.entries(color).slice(0, 10))
      : setPalette(Object.entries(color).slice(0, 10).reverse());
  }, [themeMode, color]);

  return (
    <Grid container spacing={2}>
      <Grid xs={2}>
        <Typography variant="h5" sx={{ overflowWrap: 'break-word' }}>
          {title}
        </Typography>
      </Grid>
      {palette.slice(0, 5).map(([key, value], index) => {
        return (
          <Grid xs={2} key={value}>
            <ColorCard
              shade={key}
              textColor={
                themeMode === 'light'
                  ? index < contrastPosition
                    ? contrastText
                    : '#fff'
                  : index < 10 - contrastPosition
                  ? '#fff'
                  : contrastText
              }
              backgroundColor={value}
            />
          </Grid>
        );
      })}
      <Grid xs={2}></Grid>
      {palette
        .slice(5, 10)
        .reverse()
        .map(([key, value], index) => {
          return (
            <Grid xs={2} key={value}>
              <ColorCard
                shade={key}
                textColor={
                  themeMode === 'light'
                    ? index < 10 - contrastPosition
                      ? '#fff'
                      : contrastText
                    : index < contrastPosition
                    ? contrastText
                    : '#fff'
                }
                backgroundColor={value}
              />
            </Grid>
          );
        })}
    </Grid>
  );
};

function AllColorPalettes() {
  return (
    <Box>
      <ColorPalette title={'Primary - Emerald Green'} color={emeraldGreen} />
      <Divider />
      <ColorPalette title={'Secondary - Purple'} color={purple} />
      <Divider />
      <ColorPalette title={'Neutral - Gray'} color={gray} />
      <Divider />
      <ColorPalette title={'Neutral - Blue Gray'} color={blueGray} />
      <Divider />
      <ColorPalette title={'Success - Green'} color={green} />
      <Divider />
      <ColorPalette title={'Information - Blue '} color={blue} />
      <Divider />
      <ColorPalette
        title={'Warning - Yellow'}
        color={yellow}
        textColorShade={900}
        contrastPosition={6}
      />
      <Divider />
      <ColorPalette title={'Error - Red'} color={red} />
    </Box>
  );
}

function Colors() {
  return (
    <PageLayout title="Colors">
      <Box bgcolor="background.paper" p={4} borderRadius="8px" flexGrow={1}>
        <AllColorPalettes />
      </Box>
    </PageLayout>
  );
}

export default Colors;
