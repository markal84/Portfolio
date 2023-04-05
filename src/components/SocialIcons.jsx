import React from 'react';
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Link } from 'react-router-dom';
import { GitHub, LinkedIn } from '@mui/icons-material';

export default function SocialIcons() {
  return (
    <Box sx={{ marginBottom: 2 }}>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="Github"
          icon={<GitHub />}
          component={Link}
          to="https://github.com/markal84"
          target="_blank"
          rel="noopener noreferrer"
        />
        <BottomNavigationAction
          label="LinkedIn"
          icon={<LinkedIn />}
          component={Link}
          to="https://www.linkedin.com/in/marcin-kaleta/"
          target="_blank"
          rel="noopener noreferrer"
        />
      </BottomNavigation>
    </Box>
  );
}
