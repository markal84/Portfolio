import { blue, deepOrange, grey } from '@mui/material/colors';

const theme = {
  palette: {
    primary: blue,
  },
};

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: blue,
          divider: blue[200],
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
