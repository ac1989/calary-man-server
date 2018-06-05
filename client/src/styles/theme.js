import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import grey from '@material-ui/core/colors/grey';
import orange from '@material-ui/core/colors/orange';

export default createMuiTheme({
  palette: {
    type: 'dark',
    primary: grey,
    secondary: teal,
    error: orange
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: grey[900]
      }
    }
  }
});
