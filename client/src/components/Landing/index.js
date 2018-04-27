import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withStyles } from 'material-ui';
import Button from 'material-ui/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    width: '420px',
    margin: 'auto',
    marginTop: '40px',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  googleSignIn: {
    background: '#dd4b39',
    marginTop: `${theme.spacing.unit}px`,
    color: '#f5f5f5',
    '&:hover': {
      background: '#c13c2c'
    }
  },
  githubSignIn: {
    background: '#24292e',
    color: '#f5f5f5',
    '&:hover': {
      background: '#15181c'
    }
  }
});

const SocialSignIn = props => {
  if (props.auth === null) {
    // TODO:
    // Make this a spinner;
    return <div />;
  } else if (!props.auth._id) {
    return (
      <div className={props.classes.container}>
        <Button className={props.classes.githubSignIn} href="/auth/github">
          Sign In With GITHUB
        </Button>
        <Button className={props.classes.googleSignIn} href="/auth/google">
          Sign In With GOOGLE
        </Button>
      </div>
    );
  } else {
    return <Redirect to="/intake" />;
  }
};

const Landing = props => (
  <SocialSignIn auth={props.auth} classes={props.classes} />
);

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(withStyles(styles)(Landing));
