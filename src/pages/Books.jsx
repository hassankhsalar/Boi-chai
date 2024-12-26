import React, { useEffect, useState } from 'react';
import BooksCard from '../components/BooksCard';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://boi-chai-serverside.vercel.app/books')
        .then(res => res.json())
        .then(data => {
            setBooks(data);
        })
    }, [])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    books.map(book => <BooksCard key={book._id} book={book}></BooksCard>)
                }
            </div>
        </div>
    );
};

export default Books;