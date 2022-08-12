const defaultValue = {
  clients: [], // state
};

export const clientReducer = (state = defaultValue, action) => {
  switch (action.type) {
    case 'CREATE_CLIENT':
      return { ...state, clients: [...state.clients, action.payload] };
    case 'REMOVE_CLIENT':
      return {
        ...state,
        clients: state.clients.filter((client) => client.id !== action.payload),
      };
    default:
      return state;
  }
};
