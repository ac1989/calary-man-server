import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import BodyStatsForm from './BodyStatsForm';
import MacroDisplay from './MacroDisplay';

class Calculator extends Component {
  render() {
    return (
      <Grid container xs={6} spacing={24}>
        <Grid item xs={12}>
          <MacroDisplay />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="headline">TDEE Calculator</Typography>
        </Grid>
        <Grid item xs={12}>
          <BodyStatsForm />
        </Grid>
      </Grid>
    );
  }
}

export default Calculator;
