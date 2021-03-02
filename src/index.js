import React from 'react';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1b998b",
      light: "#45cfd9",
      dark: "#2a4051"
    },
    secondary: {
      main:"#f9d22d"
    },
    error: {
      main: "#e84855"
    }
  }
})


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

