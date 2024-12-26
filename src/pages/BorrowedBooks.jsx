import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify

const BorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const userEmail = user?.email;

  useEffect(() => {
    const fetchBorrowedBooks = async () => {
      if (!userEmail) return; 
      try {
        const response = await axios.get('http://localhost:3000/borrowedBooks', {
          params: { email: userEmail },
          withCredentials: true,
        });
        setBorrowedBooks(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching borrowed books:', error);
      }
    };

    fetchBorrowedBooks();
  }, [userEmail]);

  const handleReturnBook = async (bookId) => {
    try {
      await axios.delete(`http://localhost:3000/borrowedBooks/${bookId}`, {
        data: { userEmail },
      });

      setBorrowedBooks(borrowedBooks.filter((book) => book.bookId !== bookId));
      
      // Show success toast notification
      toast.success('Book returned successfully!');
    } catch (error) {
      console.error('Error returning book:', error);
      toast.error('Error returning book. Please try again.'); // Show error toast notification
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
      
      {/* ToastContainer for notifications */}
      <ToastContainer />
    </div>
  );
};

export default BorrowedBooks;
