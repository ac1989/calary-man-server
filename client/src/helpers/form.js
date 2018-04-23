import React from 'react';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';

export const renderTextField = ({
  input,
  label,
  helperText,
  meta: { touched, error },
  ...custom
}) => (
  <Grid item xs={12} sm={12}>
    <TextField
      helperText={touched && error ? error : helperText}
      label={label}
      error={touched && error}
      {...input}
      {...custom}
    />
  </Grid>
);

export const tdeeCalculatorErrors = values => {
  const errors = {};
  if (!values.height) {
    errors.height = 'Required; You must provide your height.';
  }
  if (!values.weight) {
    errors.weight = 'Required; You must provide your weight.';
  }
  if (!values.age) {
    errors.age = 'Required; You must provide your age.';
  }
  if (values.age < 16) {
    errors.age = 'Grow up.';
  }
  return errors;
};
