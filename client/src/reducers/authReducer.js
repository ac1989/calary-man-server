const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_SUCCEEDED':
      return action.user;
    default:
      return state;
  }
};
