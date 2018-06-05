import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AuthButton from '../common/AuthButton';
import google from '../../images/logos/google-auth-36h.png';

const styles = theme => ({
  container: {
    display: 'flex',
    width: '320px',
    padding: '16px',
    maxWidth: '96%',
    margin: 'auto',
    marginTop: '40px',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  authButton: {
    // display: 'block',
    // width: '100%'
  }
});

const SocialSignIn = ({ classes, auth }) => {
  if (auth === null) {
    return <div />;
  } else if (!auth._id) {
    return (
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
