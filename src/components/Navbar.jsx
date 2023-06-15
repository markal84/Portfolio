import { navLinks } from '../db/globals';
import { AppBar, Toolbar, Container, Stack, Button, useTheme, useMediaQuery, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';
//import NightModeToggle from '../components/ThemeToggler';

function NavBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const logoStyle = {
    fontWeight: '600',
    textDecoration: 'none',
    color: '#2d2e32',
    transition: 'color 0.3s',
  };

  const linkstyles = {
    color: '#2d2e32',
    fontWeight: '600',
    transition: 'all .23s',
  };

  return (
    <nav>
      <AppBar position="fixed" elevation={3} sx={{ background: '#fff' }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h5" component={Link} to="/" sx={logoStyle}>
              Marcin Kaleta
            </Typography>
            {isMobile ? (
              <Hamburger />
            ) : (
              <Stack direction="row" spacing={2} justifyContent="flex-start">
                {navLinks.map((link, i) => {
                  const { name, href } = link;
                  return (
                    <Button component={Link} to={href} color="inherit" key={i} sx={linkstyles}>
                      {name}
                    </Button>
                  );
                })}
              </Stack>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  );
}

export default NavBar;
