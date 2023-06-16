import { Typography, Box } from '@mui/material';

export default function Stack({ stackName = '', children }) {
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between" padding={1} mt={2} mb={2}>
      <Typography sx={{ width: '30%', fontWeight: '500', color: '#2196f3' }}>{stackName}</Typography>
      <Typography sx={{ width: '70%' }}>{children}</Typography>
    </Box>
  );
}
