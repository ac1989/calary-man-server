import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import TDEECalculatorForm from './TDEECalculatorForm';
import MacroDisplay from './MacroDisplay';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// TODO: commit to server / db
async function showResults(values) {
  await sleep(500); // simulate server latency
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
}

const styles = theme => ({
  container: {
    marginTop: theme.spacing.unit
  }
});

class Calculator extends Component {
  render() {
    return (
      <Grid container spacing={24} className={this.props.classes.container}>
        <Grid item xs={12}>
          <Typography variant="display1">TDEE Calculator</Typography>
        </Grid>
        <Grid item xs={12}>
          <TDEECalculatorForm onSubmit={this.props.saveCalculatorData} />
        </Grid>
      </Grid>
    );
  }
}

export default connect(null, actions)(withStyles(styles)(Calculator));
