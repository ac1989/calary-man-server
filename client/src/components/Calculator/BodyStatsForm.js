import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from 'material-ui/styles';
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
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
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

class BodyStatsForm extends Component {
  render() {
    const { classes } = this.props;
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form className={classes.container} onSubmit={handleSubmit}>
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
        <FormControl
          component="fieldset"
          required
          className={classes.formControl}
        >
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup name="gender" className={classes.group}>
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
          </RadioGroup>
        </FormControl>
      </form>
    );
  }
}

export default reduxForm({
  form: 'BodyStatsForm'
})(withStyles(styles)(BodyStatsForm));
