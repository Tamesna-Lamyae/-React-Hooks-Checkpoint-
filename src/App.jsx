import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);

  // Récupérer les films depuis localStorage au démarrage
  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
    setMovies(storedMovies);
  }, []);

  // Ajouter un film
  const addMovie = (newMovie) => {
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
    localStorage.setItem('movies', JSON.stringify(updatedMovies));
  };

  // Filtrer les films
  const filterMovies = (title, rating) => {
    let filteredMovies = movies;
    if (title) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    if (rating) {
      filteredMovies = filteredMovies.filter(
        (movie) => movie.rating >= rating
      );
    }
    setMovies(filteredMovies);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto p-5">
        <h1 className="text-3xl font-bold text-center mb-10">Mon Application Cinéma</h1>

        {/* Ajouter un film */}
        <AddMovie onAdd={addMovie} />

        {/* Filtre */}
        <Filter onFilter={filterMovies} />

        {/* Liste des films */}
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
