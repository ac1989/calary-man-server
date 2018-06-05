import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startSubmit } from 'redux-form';
import * as actions from '../../actions';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TDEECalculatorForm from './TDEECalculatorForm';
import CalculatorHelp from './CalculatorHelp';

const styles = theme => ({
  root: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    height: 'calc(100vh - 64px)'
  },
  side: {
    width: '50%',
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  }
});

class Calculator extends Component {
  handleSubmit = values => {
    console.log(values);
    this.props.startSubmit('tdeeCalculatorForm');
    this.props.saveCalculatorData(values);
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.side}>
          <TDEECalculatorForm onSubmit={this.handleSubmit} />
        </div>
        <Paper className={classes.side} elevation={0} square>
          <CalculatorHelp />
        </Paper>
      </div>
    );
  }
}

export default connect(
  null,
  { ...actions, startSubmit }
)(withStyles(styles)(Calculator));
