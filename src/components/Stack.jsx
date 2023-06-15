import { Typography, Box } from '@mui/material';

export default function Stack({ stackName = '', children }) {
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between" padding={1}>
      <Typography sx={{ width: '30%', fontWeight: '500' }}>{stackName}</Typography>
      <Typography sx={{ width: '70%' }}>{children}</Typography>
    </Box>
  );
}
