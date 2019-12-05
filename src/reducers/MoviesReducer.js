export const MovieReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [...state, action.payload];

    case 'REMOVE_MOVIE':
      return state.filter(movie => movie.id !== action.payload);
    default:
      break;
  }
};
