import { createTheme } from '@mui/material';
import { useState, useMemo } from 'react';
import { getDesignTokens } from './theme';

export function useColorTheme() {
  const [mode, setMode] = useState('light');

  const toggleColor = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const modifiedTheme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return {
    theme: modifiedTheme,
    mode,
    toggleColor,
  };
}
