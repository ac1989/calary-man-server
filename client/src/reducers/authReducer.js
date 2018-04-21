const initialState = { loggedIn: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_SUCCEEDED':
      if (action.user.data) {
        return { loggedIn: true };
      } else {
        return { loggedIn: false };
      }
    default:
      return state;
  }
};
