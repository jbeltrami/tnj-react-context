import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { MovieReducer } from '../reducers/MoviesReducer';

export const MovieContext = createContext();

const MovieContextProvider = props => {
  const { children } = props;
  const [movies, dispatch] = useReducer(MovieReducer, [
    { title: 'Hobbit', year: 2012, id: 1 },
  ]);
  return (
    <MovieContext.Provider value={{ movies, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;

MovieContextProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
