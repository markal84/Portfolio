import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Button, Box } from '@mui/material';
import { navLinks } from '../db/globals';
import { Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Hamburger() {
  const [openMenu, setOpenMenu] = useState(false);
  function toggleOpenMenu() {
    setOpenMenu(!openMenu);
  }

  const drawerWidth = '300px';

  return (
    <>
      <Drawer
        PaperProps={{ sx: { width: drawerWidth, justifyContent: 'space-between' } }}
        anchor="right"
        open={openMenu}
        onClose={() => toggleOpenMenu(false)}
      >
        <List>
          {navLinks.map((link, i) => {
            const { name, href } = link;
            return (
              <Box key={i} sx={{ margin: '1rem 0 1rem 0' }}>
                <ListItem onClick={() => toggleOpenMenu(false)}>
                  <ListItemText sx={{ textAlign: 'center' }}>
                    <Button sx={{ width: '100%', color: '#555' }} variant="text" component={Link} to={href}>
                      {name}
                    </Button>
                  </ListItemText>
                </ListItem>
              </Box>
            );
          })}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenMenu(!openMenu)}>
        <Menu />
      </IconButton>
    </>
  );
}
