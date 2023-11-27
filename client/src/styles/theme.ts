import { createTheme } from '@mui/material/styles';
import configs from '../project.config.json';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: configs.PRIMARY_COLOR,
    },
    secondary: {
      main: configs.SECONDARY_COLOR,
    },
  },
  typography: {
    subtitle1: {
      fontWeight: 900,
    },
    subtitle2: {
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableRipple: true,
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
      styleOverrides: {
        root: {
          position: 'relative',
          transform: 'translate(0px, 0px) scale(0.75)',
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          position: 'static',
          my: 1,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          'legend > span': {
            display: 'none',
          },
          backgroundColor: '#fff',
          p: 2,
        },
        input: {
          padding: 5,
          paddingLeft: 10,
        },
      },
    },
  },
});

export default theme;
