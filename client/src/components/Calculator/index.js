import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import BodyStatsForm from './BodyStatsForm';

const IntakeProtocolForm = () => <div>Intake Protocol Form</div>;

class Calculator extends Component {
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography variant="headline">Calculator</Typography>
        </Grid>
        <Grid item xs={12}>
          <BodyStatsForm />
        </Grid>
        <Grid item xs={12}>
          <IntakeProtocolForm />
        </Grid>
      </Grid>
    );
  }
}

export default Calculator;
