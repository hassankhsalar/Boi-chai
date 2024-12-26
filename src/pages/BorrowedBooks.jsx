import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet';

const BorrowedBooks = () => {
  const { user } = useContext(AuthContext); // Fetching user from AuthContext
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const userEmail = user?.email; // Use the email directly from the user object

  useEffect(() => {
    const fetchBorrowedBooks = async () => {
      if (!userEmail) return; // Return if user email is not available
      try {
        const response = await axios.get('http://localhost:3000/borrowedBooks', {
          params: { email: userEmail }, withCredentials: true // Pass user email as a query parameter
        });
        setBorrowedBooks(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching borrowed books:', error);
      }
    };

    fetchBorrowedBooks();
  }, [userEmail]); // Depend on userEmail

  const handleReturnBook = async (bookId) => {
    try {
      // Remove the borrowed book
      await axios.delete(`http://localhost:3000/borrowedBooks/${bookId}`, {
        data: { userEmail }, // Ensure key matches backend expectations
      });
  
      // Update the local state to remove the returned book
      setBorrowedBooks(borrowedBooks.filter((book) => book.bookId !== bookId));
    } catch (error) {
      console.error('Error returning book:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Helmet>
        <title>Borrowed Books - Your Library</title>
      </Helmet>

      <h1 className="text-2xl font-bold mb-4">Your Borrowed Books</h1>
      {borrowedBooks.length === 0 ? (
        <p>No borrowed books found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {borrowedBooks.map((book) => (
            <div key={book.bookId} className="card w-72 bg-base-100 shadow-lg compact">
              <figure>
                <img src={book.image} alt={book.name} className="rounded-lg h-48 w-full object-cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-lg">{book.name}</h2>
                <p className="text-sm">Category: {book.category}</p>
                <p className="text-sm">Borrowed On: {new Date(book.borrowedOn).toLocaleDateString()}</p>
                <p className="text-sm">Return Date: {new Date(book.returnDate).toLocaleDateString()}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleReturnBook(book.bookId)}
                    className="btn btn-primary btn-sm"
                  >
                    Return
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BorrowedBooks;
