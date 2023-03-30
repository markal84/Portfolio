import { navLinks } from '../db/globals';
import { AppBar, Toolbar, Typography, Stack, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Marcin Kaleta Portfolio
          </Typography>
          <Stack direction="row" spacing={2}>
            {navLinks.map((link, i) => {
              const { name, href } = link;
              return (
                <Button component={Link} to={href} color="inherit" key={i}>
                  {name}
                </Button>
              );
            })}
          </Stack>
        </Toolbar>
      </AppBar>
    </nav>
  );
}

export default NavBar;

/*
      <ul className="NavList">
        {navLinks.map((link, i) => {
          const { name, href } = link;
          return (
            <li className="NavList--link" key={i}>
              <Link to={href}>{name}</Link>
            </li>
          );
        })}
      </ul>
      */
