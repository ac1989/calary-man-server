import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCalculatedTDEE } from '../../selectors';
import Typography from '@material-ui/core/Typography';

export class MacroDisplay extends Component {
  render() {
    return (
      <Typography variant="display1">
        {parseInt(this.props.calculatedTDEE, 10)}
      </Typography>
    );
  }
}

const mapStateToProps = state => {
  return {
    calculatedTDEE: getCalculatedTDEE(state)
  };
};

export default connect(mapStateToProps)(MacroDisplay);
