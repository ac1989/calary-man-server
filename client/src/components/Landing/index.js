import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AuthButton from '../common/AuthButton';
import google from '../../images/logos/google-auth-36h.png';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'calc(100vh - 64px)'
  },
  container: {
    display: 'flex',
    width: '320px',
    padding: '16px',
    maxWidth: '96%',
    margin: 'auto',
    marginBottom: '50vh',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  authButton: {
    textDecoration: 'none'
  }
});

const SocialSignIn = ({ classes, auth }) => {
  if (auth === null) {
    return <div />;
  } else if (!auth._id) {
    return (
      <div className={classes.root}>
        <Paper className={classes.container}>
          <a href="auth/github" className={classes.authButton}>
            <AuthButton
              authService="Github"
              fontIcon="fab fa-github"
              color="#fff"
              backgroundColor="#24292e"
            />
          </a>
          <a href="auth/google" className={classes.authButton}>
            <AuthButton
              authService="Google"
              imgIcon={google}
              color="rgba(0, 0, 0, 0.54)"
              backgroundColor="#fff"
            />
          </a>
        </Paper>
      </div>
    );
  } else {
    return <Redirect to="/calculator" />;
  }
};

const Landing = props => (
  <SocialSignIn auth={props.auth} classes={props.classes} />
);

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(withStyles(styles)(Landing));
