/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MovieContext } from '../contexts/MovieContext';

const MovieDetail = ({ movie }) => {
  const { movies, dispatch } = useContext(MovieContext);

  return (
    <li onClick={() => dispatch({ type: 'REMOVE_MOVIE', payload: movie.id })}>
      <div className="single-movie">
        <div className="title">{movie.title}</div>
        <div className="author">{movie.year}</div>
      </div>
    </li>
  );
};

export default MovieDetail;

MovieDetail.propTypes = {
  movie: PropTypes.object,
};
