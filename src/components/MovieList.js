import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MovieDetail from './MovieDetail';
import { MovieContext } from '../contexts/MovieContext';

const MovieList = () => {
  const { movies } = useContext(MovieContext);
  console.log(movies);

  return movies.length ? (
    <div className="book-list">
      <ul>
        {movies.map(movie => (
          <MovieDetail movie={movie} key={movie.id} />
        ))}
      </ul>
    </div>
  ) : (
    <div className="empty">No movies. Go to Netflix :)</div>
  );
};

export default MovieList;
