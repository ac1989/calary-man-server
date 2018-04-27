import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Dialpad from '@material-ui/icons/Dialpad';
import DateRange from '@material-ui/icons/DateRange';
import DirectionsRun from '@material-ui/icons/DirectionsRun';

const styles = theme => ({
  container: {
    background: theme.palette.primary.dark
  },
  icon: {
    color: theme.palette.primary.contrastText
  },
  flex: {
    display: 'flex'
  },
  flexEnd: {
    marginLeft: 'auto'
  }
});

const RenderSignIn = props => {
  if (props.auth === null) {
    // TODO:
    // make this a spinner
    return <div />;
  } else if (!props.auth._id) {
    return (
      <Link to={'/'}>
        <Button color="inherit">Sign In</Button>
      </Link>
    );
  } else {
    return (
      <Button href="/api/user/logout" color="inherit">
        Log Out
      </Button>
    );
  }
};

const Header = props => (
  <AppBar className={props.classes.container} position="static">
    <Toolbar className={props.classes.flex}>
      <Link to="/calculator">
        <IconButton>
          <Dialpad className={props.classes.icon} aria-label="macro-wizard" />
        </IconButton>
      </Link>
      <Link to="/intake">
        <IconButton>
          <DateRange color="disabled" aria-label="intake" />
        </IconButton>
      </Link>
      <Link to="/exercise">
        <IconButton>
          <DirectionsRun color="disabled" aria-label="exercise" />
        </IconButton>
      </Link>
      <div className={props.classes.flexEnd}>
        <RenderSignIn auth={props.auth} />
      </div>
    </Toolbar>
  </AppBar>
);

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(withStyles(styles)(Header));
