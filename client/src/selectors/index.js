import { createSelector } from 'reselect';
import { calculateTDEE } from '../helpers/tdeeCalculations';

export const getTdeeFormValues = state => {
  if (state.form.tdeeCalculatorForm && state.form.tdeeCalculatorForm.values) {
    return state.form.tdeeCalculatorForm.values;
  } else {
    return {};
  }
};

export const getCalculatedTDEE = createSelector(
  getTdeeFormValues,
  tdeeFormValues => {
    const {
      weight,
      height,
      age,
      gender,
      activityLevel,
      dietaryGoal
    } = tdeeFormValues;
    return calculateTDEE(
      weight,
      height,
      age,
      gender,
      activityLevel,
      dietaryGoal
    );
  }
);
