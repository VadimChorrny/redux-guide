const defaultValue = {
  cash: 0, // state
};

export const cashReducer = (state = defaultValue, action) => {
  switch (action.type) {
    case 'ADD_CASH':
      return { ...state, cash: state.cash + action.payload };
    case 'WITHDRAW_CASH':
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};
