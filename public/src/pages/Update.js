import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Update = () => {
  const [book, addBook] = useState(
    {
      title: "",
      description: "",
      cover: "",
    }
  );

  const navigate = useNavigate();
  const location = useLocation();
  const updateId = location.pathname.split('/')[2];

  console.log(location, updateId);

  const onChangeHandler = (e) => {
    addBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  const onClickHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put('http://localhost:3000/books/' + updateId, book);
      console.log(res);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <h2>Update a book </h2>
      <div className='form'>
        <input placeholder='title' type='text' name='title' onChange={onChangeHandler} />
        <input placeholder='description' type='text' name='description' onChange={onChangeHandler} />
        <input placeholder='cover' type='text' name='cover' onChange={onChangeHandler} />
      </div>
      <div><button className='formButton' onClick={onClickHandler}>Update</button></div>
    </div>

  )
}

export default Update
