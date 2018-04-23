import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Radio, { RadioGroup } from 'material-ui/Radio';
import {
  FormLabel,
  FormControl,
  FormControlLabel,
  FormHelperText
} from 'material-ui/Form';

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

const renderTextField = ({
  input,
  label,
  helperText,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    helperText={helperText}
    label={label}
    error={touched && error}
    {...input}
    {...custom}
  />
);

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
        <Grid item xs={12}>
          <Field
            className={classes.margin}
            name="height"
            component={renderTextField}
            label="Height (cm)"
            helperText="Enter you're height in centimeters..."
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            className={classes.margin}
            name="weight"
            component={renderTextField}
            label="Weight (kg)"
            helperText="Enter your weight in kilograms..."
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            className={classes.margin}
            name="age"
            component={renderTextField}
            label="Age"
            helperText="We wont tell anyone (honest)..."
          />
        </Grid>
        <Grid className={classes.margin} item xs={12}>
          <FormLabel component="legend">Gender</FormLabel>
          <Field name="gender" component={renderRadioGroup} row>
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
              value="1.5"
              control={<Radio />}
              label="Sedentary"
            />
            <FormControlLabel
              value="1.75"
              control={<Radio />}
              label="Moderate"
            />
            <FormControlLabel
              value="2"
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
              value="-20"
              control={<Radio />}
              label="Lose Weight (20% Defecit)"
            />
            <FormControlLabel
              value="-10"
              control={<Radio />}
              label="Lose Weight (10% Defecit)"
            />
            <FormControlLabel value="0" control={<Radio />} label="Maintain" />
            <FormControlLabel
              value="10"
              control={<Radio />}
              label="Gain Weight (10% Surplus)"
            />
            <FormControlLabel
              value="20"
              control={<Radio />}
              label="Gain Weight (20% Surplus)"
            />
          </Field>
        </Grid>
      </form>
    );
  }
}

export default reduxForm({
  form: 'bodyStatsForm'
})(withStyles(styles)(BodyStatsForm));
