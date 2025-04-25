import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const BorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const userEmail = user?.email;

  useEffect(() => {
    const fetchBorrowedBooks = async () => {
      if (!userEmail) return; 
      try {
        const response = await axios.get('https://boi-chai-serverside.vercel.app/borrowedBooks', {
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
      await axios.delete(`https://boi-chai-serverside.vercel.app/borrowedBooks/${bookId}`, {
        data: { userEmail },
      });

      setBorrowedBooks(borrowedBooks.filter((book) => book.bookId !== bookId));
      
      
      toast.success('Book returned successfully!');
    } catch (error) {
      console.error('Error returning book:', error);
      toast.error('Error returning book. Please try again.'); 
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Helmet>
        <title>Borrowed Books - Your Library</title>
      </Helmet>

      <h1 className="text-2xl font-bold mb-4 mt-24">Your Borrowed Books</h1>
      {borrowedBooks.length === 0 ? (
        <p>No borrowed books found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {borrowedBooks.map((book) => (
            <div key={book.bookId} className="card w-72 bg-background shadow-lg compact">
              <figure>
                <img src={book.image} alt={book.name} className="rounded-tl-lg rounded-tr-lg border-b-2 border-accent h-48 w-full object-cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-lg">{book.name}</h2>
                <p className="text-sm">Category: {book.category}</p>
                <p className="text-sm">Borrowed On: {new Date(book.borrowedOn).toLocaleDateString()}</p>
                <p className="text-sm">Return Date: {new Date(book.returnDate).toLocaleDateString()}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleReturnBook(book.bookId)}
                    className="btn btn-sm bg-primary py-2 rounded-md hover:bg-primary transition hover:scale-110 hover:text-white hover:font-thin"
                  >
                    Return
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      
      <ToastContainer />
    </div>
  );
};

export default BorrowedBooks;
