import React from 'react';

const MovieCard = ({ movie }) => {
  // Vérifier si l'URL de l'image est présente
  const imageURL = movie.posterURL ? movie.posterURL : 'https://via.placeholder.com/500x750?text=No+Image+Available';

  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-5 mb-6">
      <img
        className="w-full h-64 object-cover rounded-t-lg mb-4"
        src={imageURL} // Utilisation de l'URL de l'image ou une image par défaut
        alt={movie.title || 'Movie Poster'}
      />
      <h3 className="text-xl font-semibold">{movie.title}</h3>
      <p className="text-gray-400 mt-2">{movie.description}</p>
      <span className="block mt-4 text-lg text-yellow-400">{movie.rating}</span>
    </div>
  );
};

export default MovieCard;

