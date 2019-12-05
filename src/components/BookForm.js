import React, { useContext, useState } from 'react';
import uuid from 'uuid';
import { BookContext } from '../contexts/BookContext';

const BookForm = props => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    dispatch({
      type: 'ADD_BOOK',
      payload: { title, author, id: uuid() },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        <input
          type="text"
          id="title"
          placeholder="Book title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </label>
      <label htmlFor="author">
        <input
          type="text"
          id="author"
          placeholder="Book author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          required
        />
      </label>

      <input type="submit" value="Add new Book" />
    </form>
  );
};

export default BookForm;
