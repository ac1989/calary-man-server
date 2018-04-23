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
      helperText={helperText}
      label={label}
      error={touched && error}
      {...input}
      {...custom}
    />
  </Grid>
);

export const tdeeCalculatorWarn = values => {
  const warnings = {};
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...';
  }
  return warnings;
};
