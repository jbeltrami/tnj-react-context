import React from 'react';
import BookContextProvider from './contexts/BookContext';
import MovieContextProvider from './contexts/MovieContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
      <MovieContextProvider>
        <MovieList />
        <MovieForm />
      </MovieContextProvider>
    </div>
  );
}

export default App;
