'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: {
      main: '#d97706',
      contrastText: '#fff'
    },
    secondary: {
      main: '#ffdebf',
      contrastText: '#d97706',
    },
    background: {
      default: '#fff',
    },
  }
});
// Define the colors as constants or variables


export default theme;