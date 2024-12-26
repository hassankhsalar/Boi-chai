import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://boi-chai-serverside.vercel.app/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting Updated Data:', book); 
  
    fetch(`https://boi-chai-serverside.vercel.app/books/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to update book');
        }
        return res.json();
      })
      .then(() => {
        // Show success message
        Swal.fire({
          title: 'Success!',
          text: 'Book updated successfully.',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          // Redirect after clicking OK in Swal
          navigate('/allbooks');
        });
      })
      .catch((error) => {
        console.error('Error in Update Request:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to update the book. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({ ...prev, [name]: value }));
  };

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <label className="block mb-2">
        Image URL:
        <input
          type="text"
          name="image"
          value={book.image}
          onChange={handleChange}
          className="w-full p-2 border"
        />
      </label>
      <label className="block mb-2">
        Name:
        <input
          type="text"
          name="name"
          value={book.name}
          onChange={handleChange}
          className="w-full p-2 border"
        />
      </label>
      <label className="block mb-2">
        Author Name:
        <input
          type="text"
          name="authorName"
          value={book.authorName}
          onChange={handleChange}
          className="w-full p-2 border"
        />
      </label>
      <label className="block mb-2">
        Category:
        <select
          name="category"
          value={book.category}
          onChange={handleChange}
          className="w-full p-2 border"
        >
          <option value="Novel">Novel</option>
          <option value="Thriller">Thriller</option>
          <option value="History">History</option>
          <option value="Drama">Drama</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
      </label>
      <label className="block mb-2">
        Rating:
        <input
          type="number"
          name="rating"
          value={book.rating}
          onChange={handleChange}
          min="1"
          max="5"
          className="w-full p-2 border"
        />
      </label>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default UpdateBook;
