import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0f8f62',
      dark: '#0b6e4b',
      light: '#62c79e',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#0f3f56',
      light: '#2f657d',
      dark: '#092b3b',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f2efe5',
      paper: '#fcfaf4',
    },
    text: {
      primary: '#173947',
      secondary: '#496774',
    },
    divider: '#cfddd8',
  },
  typography: {
    fontFamily: '"Manrope", "Space Grotesk", sans-serif',
    h1: {
      fontSize: '3.65rem',
      fontWeight: 800,
      lineHeight: 0.98,
      letterSpacing: '-0.05em',
      '@media (max-width:900px)': {
        fontSize: '2.6rem',
      },
    },
    h2: {
      fontSize: '2.55rem',
      fontWeight: 800,
      lineHeight: 1.05,
      letterSpacing: '-0.04em',
      '@media (max-width:900px)': {
        fontSize: '2.1rem',
      },
    },
    h3: {
      fontSize: '1.9rem',
      fontWeight: 800,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    body1: {
      fontSize: '1.05rem',
      lineHeight: 1.72,
    },
    body2: {
      fontSize: '0.95rem',
      lineHeight: 1.7,
    },
    button: {
      textTransform: 'none',
      letterSpacing: '-0.01em',
      fontWeight: 800,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#f2efe5',
          color: '#173947',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          padding: '11px 25px',
          boxShadow: 'none',
          fontWeight: 800,
          borderWidth: 1.6,
        },
        containedPrimary: {
          backgroundImage: 'linear-gradient(122deg, #0f8f62 0%, #20b67d 100%)',
          boxShadow: '0 12px 28px rgba(15, 143, 98, 0.28)',
          '&:hover': {
            backgroundColor: '#0d8058',
            boxShadow: '0 16px 32px rgba(15, 143, 98, 0.34)',
          },
        },
        outlinedSecondary: {
          borderColor: '#97afb7',
          backgroundColor: 'rgba(255, 255, 255, 0.62)',
          color: '#0f3f56',
          '&:hover': {
            borderColor: '#4f7483',
            backgroundColor: 'rgba(255, 255, 255, 0.88)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 700,
          backgroundColor: '#edf5f2',
          border: '1px solid #d2dfda',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 16,
            backgroundColor: 'rgba(255, 255, 255, 0.86)',
            '& fieldset': {
              borderColor: '#c4d4ce',
            },
            '&:hover fieldset': {
              borderColor: '#8fa8b0',
            },
            '&.Mui-focused fieldset': {
              borderWidth: 2,
              borderColor: '#0f8f62',
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 22,
          boxShadow: '0 18px 30px rgba(13, 45, 50, 0.08)',
          border: '1px solid #d3e1db',
          backgroundColor: 'rgba(255, 255, 255, 0.94)',
        },
      },
    },
  },
})

export default theme
