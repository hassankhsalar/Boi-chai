import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const BooksCard = ({ book }) => {
  const { _id, image, name, quantity, authorName, category, shortDescription, rating } = book;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/* Book Image */}
      <img className="w-full h-48 object-cover" src={image} alt={name} />

      {/* Card Content */}
      <div className="p-6">
        {/* Book Title */}
        <h3 className="font-bold text-xl mb-2 text-gray-800">{name}</h3>

        {/* Author and Category */}
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium">Author:</span> {authorName}
        </p>
        <p className="text-sm text-gray-600 mb-3">
          <span className="font-medium">Category:</span> {category}
        </p>

        {/* Description */}
        <p className="text-gray-700 text-base mb-3">{shortDescription}</p>

        {/* Quantity and Rating */}
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Quantity:</span> {quantity}
          </p>
          <p className="flex items-center text-sm text-gray-600">
            <span className="font-medium mr-1">Rating:</span> 
            <span className="text-yellow-500 font-bold">{rating}</span>
            <span className="text-yellow-500 ml-1">★</span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 bg-gray-100">
        <Link to={`/books/${_id}`}>
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
          View Details
        </button>
        </Link>
      </div>
    </div>
  );
};

export default BooksCard;
