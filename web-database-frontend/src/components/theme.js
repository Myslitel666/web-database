import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

export default createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: green[400],
    },
    text: {
        primary: "#525252"
    }
  },
});
