import { deepPurple, deepOrange, grey } from '@mui/material/colors';

const theme = {
  palette: {
    primary: deepPurple,
  },
};

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: deepPurple,
          divider: deepPurple[200],
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }
      : {
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
});

export default theme;
