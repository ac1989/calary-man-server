import { createMuiTheme } from 'material-ui/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#455a64',
      contrastText: '#fff'
    },
    secondary: {
      main: '#b71c1c'
    }
  },
  status: {
    danger: 'orange'
  }
});
