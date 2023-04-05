import { purple, deepOrange, grey } from '@mui/material/colors';

const theme = {
  palette: {
    primary: purple,
  },
};

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: purple,
          divider: purple[200],
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
            secondary: grey[200],
          },
        }),
  },
});

export default theme;
