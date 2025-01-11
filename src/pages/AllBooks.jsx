import React, { useContext, useEffect, useState } from 'react';
import AllBooksCard from '../components/AllBooksCard';
import { Helmet } from 'react-helmet';
import InfiniteScroll from "react-infinite-scroll-component";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRating, setSelectedRating] = useState('All');
  const [showAvailable, setShowAvailable] = useState(false); 
  const [viewType, setViewType] = useState('Card'); 
  const [loading, setLoading] = useState(true); 
  

  const [page, setPage] = useState(1); // Pagination state
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadBooks(1); // Initial load
  }, []);

  const loadBooks = (page) => {
    setLoading(true);
    fetch(`https://boi-chai-serverside.vercel.app/books?page=${page}&limit=6`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setBooks((prev) => [...prev, ...data]);
          setFilteredBooks((prev) => [...prev, ...data]);
          setPage(page + 1);
        } else {
          setHasMore(false); // No more data to load
        }
        setLoading(false);
      });
  };

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
  const toggleAvailableBooks = () => setShowAvailable((prev) => !prev);
  const handleViewChange = (e) => setViewType(e.target.value);

  return (
    <div className="container mx-auto p-4">
      <Helmet>
        <title>All Books - Book Collection</title>  
      </Helmet>

      <h1 className="text-3xl font-bold text-center mt-24 mb-6">All Books</h1>

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
            className="px-4 py-2 border rounded-lg focus:outline-none hover:bg-accent hover:text-white hover:scale-105 transition focus:ring-2 focus:ring-blue-500"
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
      {/* scroll */}
      <InfiniteScroll
        dataLength={filteredBooks.length}
        next={() => loadBooks(page)}
        hasMore={hasMore}
        loader={
          <div className="flex justify-center items-center h-16">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
          </div>
        }
        endMessage={
          <p className="text-center text-gray-600 mt-4">No more books to show.</p>
        }
      >
        {viewType === "Card" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <AllBooksCard key={book._id} book={book} />
            ))}
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
              {filteredBooks.map((book) => (
                <tr key={book._id}>
                  <td className="border border-gray-300 px-4 py-2">{book.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{book.category}</td>
                  <td className="border border-gray-300 px-4 py-2">{book.rating}</td>
                  <td className="border border-gray-300 px-4 py-2">{book.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </InfiniteScroll>
    </div>
  );
};

export default AllBooks;
