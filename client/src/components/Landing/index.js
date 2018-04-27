import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withStyles } from 'material-ui';
import Button from 'material-ui/Button';

const styles = {
  googleSignIn: {
    background: 'red'
  },
  githubSignIn: {
    background: 'black'
  }
};

const SocialSignIn = props => {
  if (props.auth === null) {
    // TODO:
    // Make this a spinner;
    return <div />;
  } else if (!props.auth._id) {
    return (
      <div>
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

const Landing = props => {
  return (
    <div>
      <SocialSignIn auth={props.auth} classes={props.classes} />
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(withStyles(styles)(Landing));
