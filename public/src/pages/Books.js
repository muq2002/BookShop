import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get('http://localhost:3000/books');
                setBooks(res.data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchAllBooks();
    }, []);

    const deleteHandler = async (id) => {
        try {
            const res = await axios.delete("http://localhost:3000/books/" + id);
            console.log(res);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <h1>Books Shop</h1>
            <div className='books'>
                {
                    books.map((book) => {
                        return (
                            <div className='book' key={book.id}>
                                <img src={'img/' + book.cover} alt={book.cover} />
                                <h3>{book.title}</h3>
                                <p>{book.description}</p>

                                <button><Link to={'/update/' + book.id}>Update</Link></button>
                                <button onClick={() => deleteHandler(book.id)}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>

            <button><Link to='/add'>Add new book</Link></button>

        </div>
    )
}

export default Books
