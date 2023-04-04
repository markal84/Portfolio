import SocialIcons from './SocialIcons';
import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Container>
      <SocialIcons />
      <Typography variant="caption"> Copyright (c sign) by Marcin Kaleta 2023</Typography>
    </Container>
  );
};

export default Footer;
