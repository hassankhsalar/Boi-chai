import React, { useEffect, useState } from 'react';
import AllBooksCard from '../components/AllBooksCard';

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRating, setSelectedRating] = useState('All');
  const [showAvailable, setShowAvailable] = useState(false); // State to track available books
  const [viewType, setViewType] = useState('Card'); // State for the view type

  useEffect(() => {
    fetch('http://localhost:3000/books') // Update with your backend API URL
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setFilteredBooks(data);
      });
  }, []);

  useEffect(() => {
    let updatedBooks = [...books];

    // Filter by category
    if (selectedCategory !== 'All') {
      updatedBooks = updatedBooks.filter((book) => book.category === selectedCategory);
    }

    // Sort by rating
    if (selectedRating !== 'All') {
      updatedBooks.sort((a, b) => (selectedRating === 'High' ? b.rating - a.rating : a.rating - b.rating));
    }

    // Filter to show only available books
    if (showAvailable) {
      updatedBooks = updatedBooks.filter((book) => book.quantity > 0);
    }

    setFilteredBooks(updatedBooks);
  }, [selectedCategory, selectedRating, books, showAvailable]);

  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handleRatingChange = (e) => setSelectedRating(e.target.value);
  
  const toggleAvailableBooks = () => {
    setShowAvailable((prev) => !prev);
  };

  const handleViewChange = (e) => {
    setViewType(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">All Books</h1>

      {/* Sorting Options */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {/* Category Dropdown */}
        <div>
          <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
            Sort by Category
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Categories</option>
            <option value="Novel">Novel</option>
            <option value="Thriller">Thriller</option>
            <option value="History">History</option>
            <option value="Drama">Drama</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </select>
        </div>

        {/* Rating Dropdown */}
        <div>
          <label htmlFor="rating" className="block text-gray-700 font-medium mb-2">
            Sort by Rating
          </label>
          <select
            id="rating"
            value={selectedRating}
            onChange={handleRatingChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Ratings</option>
            <option value="High">Highest Rating</option>
            <option value="Low">Lowest Rating</option>
          </select>
        </div>

        {/* Show Available Books Button */}
        <div>
          <label htmlFor="availability" className="block text-gray-700 font-medium mb-2">
            Sort by Availability
          </label>
          <button
            onClick={toggleAvailableBooks}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {showAvailable ? 'Show All Books' : 'Show Available Books'}
          </button>
        </div>

        {/* View Type Dropdown */}
        <div>
          <label htmlFor="view" className="block text-gray-700 font-medium mb-2">
            View
          </label>
          <select
            id="view"
            value={viewType}
            onChange={handleViewChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Card">Card View</option>
            <option value="Table">Table View</option>
          </select>
        </div>
      </div>

      {/* Book Display Area */}
      {viewType === 'Card' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <AllBooksCard key={book._id} book={book} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600">No books available for the selected filters.</p>
          )}
        </div>
      ) : (
        <table className="min-w-full border border-gray-300 mt-6">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Category</th>
              <th className="border border-gray-300 px-4 py-2">Rating</th>
              <th className="border border-gray-300 px-4 py-2">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <tr key={book._id}>
                  <td className="border border-gray-300 px-4 py-2">{book.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{book.category}</td>
                  <td className="border border-gray-300 px-4 py-2">{book.rating}</td>
                  <td className="border border-gray-300 px-4 py-2">{book.quantity}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="border border-gray-300 px-4 py-2 text-center text-gray-600">
                  No books available for the selected filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllBooks;
