import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import MenuIcon from '@material-ui/icons/Menu';
import HelpIcon from '@material-ui/icons/Help';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  root: {
    [theme.breakpoints.up('xs')]: {
      position: 'absolute'
    },
    [theme.breakpoints.up('sm')]: {
      position: 'static'
    }
  },
  toolBar: {
    padding: '0',
    [theme.breakpoints.up('sm')]: {
      padding: `0 ${theme.spacing.unit * 2}px`
    },
    [theme.breakpoints.up('md')]: {
      padding: `0 ${theme.spacing.unit * 3}px`
    }
  },
  flex: {
    flex: '1'
  }
});

const RenderSignIn = props => {
  if (props.auth === null) {
    return <div />;
  } else if (!props.auth) {
    return (
      // <Link to={'/'}>
      <Link to="/">
        <Button color="inherit">Sign In</Button>
      </Link>
      // </Link>
    );
  } else {
    return (
      <Button href="/api/user/logout" color="inherit">
        Log Out
      </Button>
    );
  }
};

const Header = ({ classes, auth }) => {
  const renderAuth = auth ? (
    <Button href="/api/user/logout" color="primary">
      Log Out
    </Button>
  ) : (
    <Link to="/">
      <Button color="primary">Log In</Button>
    </Link>
  );
  return (
    <AppBar position="static" elevation={0} className={classes.root}>
      <Toolbar className={classes.toolBar}>
        <IconButton disabled>
          <MenuIcon />
        </IconButton>
        <Link to="/calculator">
          <IconButton>
            <i className="fa fa-calculator" />
          </IconButton>
        </Link>
        <IconButton disabled>
          <LocalDiningIcon />
        </IconButton>
        <IconButton disabled>
          <FitnessCenterIcon />
        </IconButton>
        <div className={classes.flex} />
        {renderAuth}
        <Link to="/help">
          <IconButton>
            <HelpIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(withStyles(styles)(Header));
