import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { tdeeCalculatorErrors, normalizeInt } from '../../helpers/form';
import MacroDisplay from './MacroDisplay';

import { RadioGroup, TextField, Select } from 'redux-form-material-ui';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
    margin: 'auto',
    width: '100%',
    maxWidth: '472px',
    padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit}px`
  },
  formRow: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginLeft: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  radioItem: {
    width: 100
  },
  textField: {
    marginRight: theme.spacing.unit * 2,
    flexGrow: 1
  },
  selectField: {
    display: 'flex',
    flexDirection: 'column'
  },
  select: {
    marginRight: theme.spacing.unit * 2,
    width: 200
  }
});

class TDEECalculatorForm extends Component {
  render() {
    const { classes } = this.props;
    const { handleSubmit, submitting, invalid } = this.props;
    return (
      <form className={classes.root} onSubmit={handleSubmit}>
        <div className={classes.formRow}>
          <Field
            className={classes.margin}
            name="gender"
            component={RadioGroup}
            row
          >
            <FormControlLabel
              className={classes.radioItem}
              value="male"
              control={<Radio />}
              label="Male"
            />
            <FormControlLabel
              className={classes.radioItem}
              value="female"
              control={<Radio />}
              label="Female"
            />
          </Field>
        </div>

        <div className={classes.formRow}>
          <Field
            className={classes.textField}
            name="age"
            component={TextField}
            label="Age"
            helperText="We wont tell anyone (honest)..."
            normalize={normalizeInt}
          />
          <Field
            className={classes.textField}
            name="height"
            component={TextField}
            label="Height (cm)"
            required
            helperText="Enter your height in centimeters..."
            normalize={normalizeInt}
          />
          <Field
            className={classes.textField}
            name="weight"
            component={TextField}
            label="Weight (kg)"
            required
            helperText="Enter your weight in kilograms..."
            normalize={normalizeInt}
          />
        </div>

        <div className={classes.formRow}>
          <div className={classes.selectField}>
            <InputLabel htmlFor="al-helper">Activity Level</InputLabel>
            <Field
              name="activityLevel"
              id="al-helper"
              component={Select}
              placeholder="Activity Level"
              className={classes.select}
            >
              <MenuItem value="1.375">Sedentary</MenuItem>
              <MenuItem value="1.55" label="Moderate">
                Moderate
              </MenuItem>
              <MenuItem value="1.725" label="Very Active">
                Very Active
              </MenuItem>
            </Field>
          </div>
          <div className={classes.selectField}>
            <InputLabel htmlFor="dg-helper">Dietary Goal</InputLabel>

            <Field
              name="dietaryGoal"
              id="dg-helper"
              component={Select}
              placeholder="Dietary Goal"
              className={classes.select}
            >
              <MenuItem value={'0.8'}>Cut 20%</MenuItem>
              <MenuItem value={'0.9'}>Cut 10%</MenuItem>
              <MenuItem value={'1'}>Maintain</MenuItem>
              <MenuItem value={'1.1'}>Bulk 10%</MenuItem>
              <MenuItem value={'1.2'}>Bulk 20%</MenuItem>
            </Field>
          </div>
        </div>

        <div className={classes.formRow}>
          <MacroDisplay />
        </div>

        <div className={classes.formRow}>
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
        </div>
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
        activityLevel: '',
        dietaryGoal: ''
      };
    }
  };
  return {
    initialValues: determineInitValues(),
    auth
  };
};

export default connect(mapStateToProps)(withStyles(styles)(TDEECalculatorForm));
