import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from 'material-ui/styles';
import Radio from 'material-ui/Radio';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import { FormLabel, FormControlLabel } from 'material-ui/Form';
import {
  renderTextField,
  renderRadioGroup,
  tdeeCalculatorErrors,
  normalizeInt
} from '../../helpers/form';
import MacroDisplay from './MacroDisplay';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: theme.spacing.unit,
    margin: theme.spacing.unit,
    background: '#f1f1f1'
  },
  margin: {
    margin: theme.spacing.unit
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  formSection: {
    marginTop: theme.spacing.unit * 3
  }
});

// TODO:
// +add imperial units
// +add custom values
// +improve validation

class TDEECalculatorForm extends Component {
  render() {
    const { classes } = this.props;
    const { handleSubmit, submitting, invalid } = this.props;
    return (
      <form className={classes.container} onSubmit={handleSubmit}>
        <Grid item xs={12} sm={6} md={4} className={classes.formSection}>
          <FormLabel component="legend">Measurements</FormLabel>
          <Field
            className={classes.margin}
            name="height"
            component={renderTextField}
            label="Height (cm)"
            required
            helperText="Enter you're height in centimeters..."
            normalize={normalizeInt}
          />
          <Field
            className={classes.margin}
            name="weight"
            component={renderTextField}
            label="Weight (kg)"
            required
            helperText="Enter your weight in kilograms..."
            normalize={normalizeInt}
          />
          <Field
            className={classes.margin}
            name="age"
            component={renderTextField}
            label="Age"
            helperText="We wont tell anyone (honest)..."
            normalize={normalizeInt}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.formSection}>
          <Grid item xs={12}>
            <FormLabel component="legend">Gender</FormLabel>
            <Field
              className={classes.margin}
              name="gender"
              component={renderRadioGroup}
              row
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
            </Field>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormLabel component="legend">Activity Level</FormLabel>
            <Field
              className={classes.margin}
              name="activityLevel"
              component={renderRadioGroup}
            >
              <FormControlLabel
                value="1.375"
                control={<Radio />}
                label="Sedentary"
              />
              <FormControlLabel
                value="1.55"
                control={<Radio />}
                label="Moderate"
              />
              <FormControlLabel
                value="1.725"
                control={<Radio />}
                label="Very Active"
              />
            </Field>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} className={classes.formSection}>
          <Grid item xs={12}>
            <FormLabel component="legend">Dietary Goal</FormLabel>
            <Field
              className={classes.margin}
              name="dietaryGoal"
              component={renderRadioGroup}
            >
              <FormControlLabel
                value="0.8"
                control={<Radio />}
                label="Lose Weight (20% Defecit)"
              />
              <FormControlLabel
                value="0.9"
                control={<Radio />}
                label="Lose Weight (10% Defecit)"
              />
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="Maintain"
              />
              <FormControlLabel
                value="1.1"
                control={<Radio />}
                label="Gain Weight (10% Surplus)"
              />
              <FormControlLabel
                value="1.2"
                control={<Radio />}
                label="Gain Weight (20% Surplus)"
              />
            </Field>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.formSection}>
          <MacroDisplay />
        </Grid>
        <Grid item xs={12} className={classes.formSection}>
          {this.props.auth && (
            <Button
              type="submit"
              variant="raised"
              color="secondary"
              disabled={submitting || invalid}
            >
              Save
            </Button>
          )}
        </Grid>
      </form>
    );
  }
}

TDEECalculatorForm = reduxForm({
  form: 'tdeeCalculatorForm',
  validate: tdeeCalculatorErrors,
  enableReinitialize: true
})(TDEECalculatorForm);

const mapStateToProps = ({ auth }) => {
  const determineInitValues = () => {
    if (auth && auth.weighIns[0]) {
      return { ...auth.data, weight: auth.weighIns[0].weight };
    } else {
      return {
        height: '',
        weight: '',
        age: '',
        gender: 'male',
        activityLevel: '1.55',
        dietaryGoal: '1'
      };
    }
  };
  return {
    initialValues: determineInitValues(),
    auth
  };
};

export default connect(mapStateToProps)(withStyles(styles)(TDEECalculatorForm));
