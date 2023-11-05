import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Neutral2Typography } from '../../styled';

function TextContent({ label, data, LabelProps, ...props }) {
  return (
    <Box marginBottom={2} {...props}>
      <Neutral2Typography variant="subtitle2" marginBottom={0.75} {...LabelProps}>
        {label}
      </Neutral2Typography>
      <Typography variant="subtitle2" fontSize={14}>
        {data}
      </Typography>
    </Box>
  );
}

export default TextContent;
