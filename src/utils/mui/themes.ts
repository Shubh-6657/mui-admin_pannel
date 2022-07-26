import { createTheme } from '@mui/material/styles'

export const tailwindBlueTheme = createTheme({
  palette: {
    primary: {
      main: '#3b82f6'
    }
  }
})

export const muiBlueTheme = createTheme({
  palette: {
    primary: {
      main: '#007fff',
      dark: '#0059B3',
      light: '#198CFF'
    },
    warning: {
      main: '#FFA000',
      dark: '#B37100',
      light: '#FFAB19'
    },
    error: {
      main: '#E62517',
      dark: '#BF1F13',
      light: '#FF2919'
    }
  }
})
