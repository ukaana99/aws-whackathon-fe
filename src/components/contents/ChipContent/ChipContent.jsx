import Box from '@mui/material/Box';

import { Neutral2Typography } from '../../styled';

function ChipContent({ label, chip, LabelProps, ...props }) {
  return (
    <Box marginBottom={1} {...props}>
      <Neutral2Typography variant="subtitle2" marginBottom={0.5} {...LabelProps}>
        {label}
      </Neutral2Typography>
      {chip}
    </Box>
  );
}

export default ChipContent;
