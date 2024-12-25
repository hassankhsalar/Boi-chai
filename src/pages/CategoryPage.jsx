// src/pages/CategoryPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CategoryPage = () => {
    const { categoryName } = useParams();
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                // Fetch books based on category name
                const response = await axios.get('/books', {
                    params: { category: categoryName } // Pass category as query parameter
                });
                setBooks(response.data);
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

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-4">{categoryName} Books</h2>
            <div className="grid grid-cols-3 gap-4">
                {books.length > 0 ? (
                    books.map((book) => (
                        <div key={book._id} className="border rounded-lg p-4">
                            <h3 className="font-semibold">{book.name}</h3>
                            <p>{book.authorName}</p>
                            <p>{book.shortDescription}</p>
                            <p>Rating: {book.rating}</p>
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
