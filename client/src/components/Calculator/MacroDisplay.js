import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTdeeFormValues, getCalculatedTDEE } from '../../selectors';

export class MacroDisplay extends Component {
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.props.tdeeFormValues, null, 2)}</pre>
        <h2>{this.props.calculatedTDEE}</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tdeeFormValues: getTdeeFormValues(state),
    calculatedTDEE: getCalculatedTDEE(state)
  };
};

export default connect(mapStateToProps)(MacroDisplay);
