const initialState = null;
// TODO: user more semantic?
export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_SUCCEEDED':
      return action.user;
    case 'SAVE_CALCULATOR_DATA_SUCCEEDED':
      return action.user;
    default:
      return state;
  }
};
