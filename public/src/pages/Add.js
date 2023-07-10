import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [book, addBook] = useState(
        {
            title: "",
            description: "",
            cover: "",
        }
    );

    const navigate = useNavigate();
    const onChangeHandler = (e) => {
        addBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const onClickHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/books', book);
            console.log(res);
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
        <h3>Add a new book</h3>
            <div className='form'>
                <input placeholder='title' type='text' name='title' onChange={onChangeHandler} />
                <input placeholder='description' type='text' name='description' onChange={onChangeHandler} />
                <input placeholder='cover' type='text' name='cover' onChange={onChangeHandler} />
            </div>
            <div><button className='formButton' onClick={onClickHandler}>Add</button></div>
        </div>

    )
}

export default Add
