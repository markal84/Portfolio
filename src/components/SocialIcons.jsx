import React from 'react';
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

export default function SocialIcons() {
  return (
    <Box>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Github" icon={<GitHub />} />
        <BottomNavigationAction label="LinkedIn" icon={<LinkedIn />} />
      </BottomNavigation>
    </Box>
  );
}
