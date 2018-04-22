import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from 'material-ui/Button';

const SocialSignIn = props => {
  if (props.auth === null) {
    // TODO:
    // Make this a spinner;
    return <div />;
  } else if (!props.auth._id) {
    return (
      <div>
        <Button>Sign In With GITHUB</Button>
        <Button>Sign In With GOOGLE</Button>
      </div>
    );
  } else {
    return <Redirect to="/intake" />;
  }
};

const Landing = props => {
  return (
    <div>
      <SocialSignIn auth={props.auth} />
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Landing);
