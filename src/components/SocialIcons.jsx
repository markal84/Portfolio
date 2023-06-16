import React from 'react';
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Link } from 'react-router-dom';
import { GitHub, LinkedIn } from '@mui/icons-material';

export default function SocialIcons({ size = 'medium' }) {
  return (
    <Box mt={4} mb={2} justifyContent="center">
      <BottomNavigation showLabels sx={{ backgroundColor: 'transparent', width: '30%', margin: '0 auto' }}>
        <BottomNavigationAction
          label="Github"
          icon={<GitHub fontSize={size === 'large' ? 'large' : 'small'} />}
          component={Link}
          to="https://github.com/markal84"
          target="_blank"
          rel="noopener noreferrer"
        />
        <BottomNavigationAction
          label="LinkedIn"
          icon={<LinkedIn fontSize={size === 'large' ? 'large' : 'small'} />}
          component={Link}
          to="https://www.linkedin.com/in/marcin-kaleta/"
          target="_blank"
          rel="noopener noreferrer"
        />
      </BottomNavigation>
    </Box>
  );
}
