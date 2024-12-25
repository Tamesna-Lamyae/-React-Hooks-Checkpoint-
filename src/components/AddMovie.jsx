import React, { useState } from 'react';

const AddMovie = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { title, description, posterURL, rating };
    onAdd(newMovie);
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg mb-8 shadow-md">
      <input
        type="text"
        className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md"
        placeholder="URL Poster"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
      />
      <input
        type="number"
        className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md"
        placeholder="Note"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button
        type="submit"
        className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 w-full"
      >
        Ajouter Film
      </button>
    </form>
  );
};

export default AddMovie;
