import SocialIcons from './SocialIcons';
import { Container, Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Container component="footer">
      <SocialIcons />
      <Box sx={{ textAlign: 'center' }}>
        <Typography sx={{ color: '#e8e8e8', fontSize: '0.7rem' }}> &copy; Marcin Kaleta 2023</Typography>
      </Box>
    </Container>
  );
};

export default Footer;
