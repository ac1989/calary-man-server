import React from 'react';
import { withStyles } from 'material-ui';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Dialpad from '@material-ui/icons/Dialpad';
import DateRange from '@material-ui/icons/DateRange';
import DirectionsRun from '@material-ui/icons/DirectionsRun';

const styles = {
  flex: {
    display: 'flex'
  },
  flexEnd: {
    marginLeft: 'auto'
  }
};

const Header = props => (
  <AppBar position="static">
    <Toolbar className={props.classes.flex}>
      <IconButton>
        <Dialpad color="inherit" aria-label="intake" />
      </IconButton>
      <IconButton>
        <DateRange color="inherit" aria-label="intake" />
      </IconButton>
      <IconButton>
        <DirectionsRun color="inherit" aria-label="exercise" />
      </IconButton>
      <Button color="inherit" className={props.classes.flexEnd}>
        Sign In
      </Button>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Header);
