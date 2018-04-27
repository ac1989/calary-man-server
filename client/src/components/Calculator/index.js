import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startSubmit } from 'redux-form';
import * as actions from '../../actions';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import TDEECalculatorForm from './TDEECalculatorForm';

const styles = theme => ({
  container: {
    marginTop: theme.spacing.unit
  }
});

class Calculator extends Component {
  handleSubmit = values => {
    console.log(values);
    this.props.startSubmit('tdeeCalculatorForm');
    this.props.saveCalculatorData(values);
  };
  render() {
    return (
      <Grid container spacing={24} className={this.props.classes.container}>
        <Grid item xs={12}>
          <Typography variant="display1">TDEE Calculator</Typography>
        </Grid>
        <Grid item xs={12}>
          <TDEECalculatorForm onSubmit={this.handleSubmit} />
        </Grid>
      </Grid>
    );
  }
}

export default connect(null, { ...actions, startSubmit })(
  withStyles(styles)(Calculator)
);
