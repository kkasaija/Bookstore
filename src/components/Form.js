import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addBook({
      title,
      author,
    }));
    setAuthor('');
    setTitle(' ');
  };

  return (
    <div className="form-container">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form onSubmit={onSubmit}>
        <input
          className="form-book-title"
          type="text"
          required
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          className="form-book-author"
          type="text"
          required
          placeholder="Author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
        <button className="add-btn" type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Form;
