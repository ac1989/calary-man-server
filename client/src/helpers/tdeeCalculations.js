// BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
// BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161

export const calculateTDEE = (
  weight = 0,
  height = 0,
  age = 0,
  gender = 'male',
  activityLevel = 1,
  dietaryGoal = 1
) => {
  if (gender === 'male') {
    return (
      (weight * 10 + 6.25 * height - 5 * age + 5) * activityLevel * dietaryGoal
    );
  } else if (gender === 'female') {
    return (
      (weight * 10 + 6.25 * height - 5 * age - 161) *
      activityLevel *
      dietaryGoal
    );
  }
};

// 800 + 1125 - 140 = 1785
// 1785 * 1.55 = 2766
// 2232 * 0.8 = 2212
