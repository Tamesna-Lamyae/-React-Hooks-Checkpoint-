import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleFilter = () => {
    onFilter(title, rating);
  };

  return (
    <div className="flex justify-between mb-8">
      <div className="flex space-x-4">
        <input
          type="text"
          className="p-2 bg-gray-700 text-white rounded-md"
          placeholder="Filtrer par titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          className="p-2 bg-gray-700 text-white rounded-md"
          placeholder="Filtrer par note"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <button
        onClick={handleFilter}
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500"
      >
        Filtrer
      </button>
    </div>
  );
};

export default Filter;
