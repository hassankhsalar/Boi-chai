import React, { useEffect, useState } from 'react';
import BooksCard from '../components/BooksCard';
import AllBooksCard from '../components/AllBooksCard';

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRating, setSelectedRating] = useState('All');

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

    setFilteredBooks(updatedBooks);
  }, [selectedCategory, selectedRating, books]);

  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handleRatingChange = (e) => setSelectedRating(e.target.value);

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
      </div>

      {/* Book Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <AllBooksCard key={book._id} book={book} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600">No books available for the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default AllBooks;
