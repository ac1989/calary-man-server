import React from 'react';
import validator from 'validator';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import { RadioGroup } from '@material-ui/core';

export const renderTextField = ({
  input,
  label,
  helperText,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    helperText={touched && error ? error : helperText}
    label={label}
    error={touched && error}
    {...input}
    {...custom}
  />
);

export const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    value={input.value}
    onChange={(event, value) => input.onChange(value)}
    row={rest.row}
  />
);

export const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <Select
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
    value={input.value}
  />
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
  if (values.age < 15) {
    errors.age = 'This probably wont work for someone so young.';
  }
  if (values.age > 120) {
    errors.age = 'That seems quites old...';
  }
  return errors;
};

export const normalize2Decimal = (value, prevValue) => {
  if (value === '') {
    return value;
  }
  if (value.length > 5) {
    return prevValue;
  }
  return validator.isFloat(value) ? value : prevValue;
};

export const normalizeInt = (value, prevValue) => {
  if (value === '') {
    return value;
  }
  return validator.isInt(value) ? value : prevValue;
};
