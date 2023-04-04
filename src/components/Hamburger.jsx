import React, { useState } from 'react';
import SocialIcons from './SocialIcons';
import { Drawer, List, ListItem, ListItemText, Divider, IconButton, Button } from '@mui/material';
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
        PaperProps={{ sx: { width: drawerWidth } }}
        anchor="right"
        open={openMenu}
        onClose={() => toggleOpenMenu(false)}
      >
        <List>
          {navLinks.map((link, i) => {
            const { name, href } = link;
            return (
              <div key={i}>
                <ListItem onClick={() => toggleOpenMenu(false)}>
                  <ListItemText sx={{ textAlign: 'center' }}>
                    <Button sx={{ width: '100%' }} variant="text" component={Link} to={href}>
                      {name}
                    </Button>
                  </ListItemText>
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
        <SocialIcons />
      </Drawer>
      <IconButton onClick={() => setOpenMenu(!openMenu)}>
        <Menu />
      </IconButton>
    </>
  );
}
