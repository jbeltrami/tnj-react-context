import React, { useContext, useState } from 'react';
import uuid from 'uuid';
import { MovieContext } from '../contexts/MovieContext';

const MovieForm = () => {
  const { dispatch } = useContext(MovieContext);
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_MOVIE', payload: { title, year, id: uuid() } });
    setTitle('');
    setYear('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        <input
          type="text"
          id="title"
          value={title}
          placeholder="Movie Title"
          onChange={e => setTitle(e.target.value)}
        />
      </label>
      <label htmlFor="year">
        <input
          type="text"
          id="year"
          value={year}
          placeholder="Release Date"
          onChange={e => setYear(e.target.value)}
        />
      </label>

      <input type="submit" value="Add new Movie" />
    </form>
  );
};

export default MovieForm;
