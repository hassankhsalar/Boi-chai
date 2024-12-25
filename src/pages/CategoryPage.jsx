// src/pages/CategoryPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

const CategoryPage = () => {
    const { categoryName } = useParams();
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:3000/books', {
                    params: { category: categoryName }
                });
                // Check if response data is an array
                if (Array.isArray(response.data)) {
                    setBooks(response.data);
                } else {
                    console.error("Expected an array but received:", response.data);
                    setBooks([]); // Set to empty array if the response is not valid
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
    
        fetchBooks();
    }, [categoryName]);
    

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const handleDetailsClick = (bookId) => {
        navigate(`/books/${bookId}`); // Navigate to BookDetails page with the book ID
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-4">{categoryName} Books</h2>
            <div className="grid grid-cols-4 gap-4">
                {books.length > 0 ? (
                    books.map((book) => (
                        <div key={book._id} className="card bg-base-100 w-64 shadow-xl">
                            <figure className="px-6 pt-6">
                                <img
                                    src={book.image || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
                                    alt={book.name}
                                    className="rounded-xl h-32 w-32 object-cover"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-lg">{book.name}</h2>
                                <p className="text-sm">{book.shortDescription}</p>
                                <p className="text-sm">Author: {book.authorName}</p>
                                <p className="text-sm">Rating: {book.rating}</p>
                                <div className="card-actions">
                                    <button 
                                        className="btn btn-primary btn-sm" 
                                        onClick={() => handleDetailsClick(book._id)} // Call handleDetailsClick on button click
                                    >
                                        Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No books available in this category.</p>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
