import { navLinks } from '../db/globals';
import { AppBar, Toolbar, Container, Stack, Button, CssBaseline, useTheme, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';

function NavBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <nav>
      <AppBar position="static">
        <Container maxWidth="lg">
          <CssBaseline />
          <Toolbar>
            {isMobile ? (
              <Hamburger />
            ) : (
              <Stack direction="row" spacing={2} justifyContent="flex-start">
                {navLinks.map((link, i) => {
                  const { name, href } = link;
                  return (
                    <Button component={Link} to={href} color="inherit" key={i}>
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
