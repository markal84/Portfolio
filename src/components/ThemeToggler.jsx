import { Box, IconButton, Typography } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '../theme/ThemeContextProvider';

const NightModeToggle = () => {
  const { mode, toggleColor } = useThemeContext();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'text.primary',
      }}
    >
      <IconButton size="small" sx={{ ml: 1, mr: 1 }} onClick={toggleColor} color="inherit">
        {mode !== 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        <Typography sx={{ ml: 1 }}>{mode} mode</Typography>
      </IconButton>
    </Box>
  );
};

export default NightModeToggle;
