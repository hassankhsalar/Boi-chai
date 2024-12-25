import React, { useState, useEffect, useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../provider/AuthProvider';

const BookDetails = () => {
  const { _id, image, name, quantity, authorName, category, shortDescription, rating } = useLoaderData();

  const { user } = useContext(AuthContext); // Get the user from AuthContext
  const [showModal, setShowModal] = useState(false);
  const [returnDate, setReturnDate] = useState('');
  const isDisabled = quantity === 0;

  const handleBorrow = () => {
    if (isDisabled) return;
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!user || !user.email) {
      console.error('User is not authenticated');
      return;
    }
  
    try {
      // Log the request data
      console.log('Request Data:', {
        bookId: _id,
        returnDate,
        user: {
          name: user.displayName || 'Anonymous',
          email: user.email,
        },
        image, // Include the image URL in the request data
      });
  
      // Make an API call to borrow the book
      await axios.post('http://localhost:3000/borrow', {
        bookId: _id,
        returnDate,
        user: {
          name: user.displayName || 'Anonymous',
          email: user.email,
        },
        image, // Send the image along with the borrow request
      });
  
      // Update the book quantity in the database
      await axios.patch(`http://localhost:3000/books/${_id}`, {
        quantity: quantity - 1,
      });
  
      console.log(`Borrowed ${name} with return date: ${returnDate}`);
      setShowModal(false);
    } catch (error) {
      console.error('Error borrowing the book:', error);
    }
  };
  
  
  

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={image}
            alt={name}
            className="w-full md:w-1/3 h-64 object-cover rounded-lg"
          />
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
              <p className="text-sm text-gray-500 mt-2">By {authorName}</p>
              <p className="text-lg font-medium mt-4">
                Category: <span className="text-blue-500">{category}</span>
              </p>
              <p className="text-lg font-medium mt-4">
                Rating: <span className="text-yellow-500">{rating} ★</span>
              </p>
              <p className="text-gray-600 mt-4">{shortDescription}</p>
              <p className="text-lg font-medium mt-4">
                Quantity Available: {quantity}
              </p>
            </div>
            <button
              className={`mt-6 py-2 px-4 rounded-lg text-white ${
                isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
              }`}
              onClick={handleBorrow}
              disabled={isDisabled}
            >
              {isDisabled ? 'Out of Stock' : 'Borrow'}
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Borrow {name}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="returnDate" className="block text-gray-700 font-medium">
                  Return Date:
                </label>
                <input
                  type="date"
                  id="returnDate"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              {/* Display user information */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">Name:</label>
                <input
                  type="text"
                  value={user?.displayName || 'Anonymous'}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">Email:</label>
                <input
                  type="email"
                  value={user?.email || ''}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  readOnly
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="py-2 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Borrow
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
