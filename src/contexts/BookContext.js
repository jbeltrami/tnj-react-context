import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { BookReducer } from '../reducers/BookReducer';
// import unsplash from '../apis/unsplash';

export const BookContext = createContext();

const BookContextProvider = props => {
  const { children } = props;

  const [books, dispatch] = useReducer(BookReducer, [
    { title: 'Hobbit', author: 'Tolkien', id: 1 },
  ]);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
BookContextProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
