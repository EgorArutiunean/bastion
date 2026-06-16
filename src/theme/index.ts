import { createTheme } from '@mui/material/styles'
import { amber, red, grey } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: amber[500],
      contrastText: '#040404',
    },
    secondary: {
      main: red[400],
    },
    background: {
      default: '#050505',
      paper: '#0d0d0d',
    },
    text: {
      primary: '#f5f5f5',
      secondary: grey[400],
    },
  },
  typography: {
    fontFamily: '"Inter","Roboto","Helvetica","Arial",sans-serif',
    h1: {
      fontSize: 'clamp(2.6rem, 6vw, 5.6rem)',
      fontWeight: 800,
      lineHeight: 0.98,
      letterSpacing: 0,
    },
    h2: {
      fontSize: 'clamp(1.8rem, 3vw, 3rem)',
      fontWeight: 700,
      letterSpacing: 0,
    },
    body1: {
      color: grey[300],
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        },
      },
    },
  },
})

export default theme
