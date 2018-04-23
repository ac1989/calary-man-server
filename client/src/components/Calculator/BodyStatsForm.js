import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Button from 'material-ui/Button';
import {
  FormLabel,
  FormControl,
  FormControlLabel,
  FormHelperText
} from 'material-ui/Form';
import { renderTextField } from '../../helpers/form';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  margin: {
    margin: theme.spacing.unit
  },
  formControl: {
    margin: theme.spacing.unit * 3
  }
});

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
    row={rest.row}
  />
);

class BodyStatsForm extends Component {
  render() {
    const { classes } = this.props;
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form className={classes.container} onSubmit={handleSubmit}>
        <Grid container>
          <Field
            className={classes.margin}
            name="height"
            component={renderTextField}
            label="Height (cm)"
            helperText="Enter you're height in centimeters..."
          />
          <Field
            className={classes.margin}
            name="weight"
            component={renderTextField}
            label="Weight (kg)"
            helperText="Enter your weight in kilograms..."
          />
          <Field
            className={classes.margin}
            name="age"
            component={renderTextField}
            label="Age"
            helperText="We wont tell anyone (honest)..."
          />
        </Grid>
        <Grid container>
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
          <Grid item xs={12}>
            <FormLabel component="legend">Activity Level</FormLabel>
            <Field
              className={classes.margin}
              name="activityLevel"
              component={renderRadioGroup}
              row
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
        <Button
          variant="raised"
          color="secondary"
          disabled={pristine || submitting}
        >
          Save
        </Button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'tdeeCalculatorForm'
})(withStyles(styles)(BodyStatsForm));
