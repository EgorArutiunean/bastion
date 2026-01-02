import { createTheme } from '@mui/material/styles'
import { amber, green, grey } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: amber[500],
      contrastText: '#040404',
    },
    secondary: {
      main: green[400],
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
      fontSize: 'clamp(2.5rem, 4vw, 4rem)',
      fontWeight: 700,
    },
    h2: {
      fontSize: 'clamp(1.8rem, 3vw, 3rem)',
      fontWeight: 600,
    },
    body1: {
      color: grey[300],
    },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 999,
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
