import './Form.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addBook({
      title,
      author,
    }));
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
        <div className="form-book-category">
          <select
            className="select"
            default
            name="category"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          >
            <option value="">
              Author
            </option>
            <option value="History">William Shakespeare</option>
            <option value="Science">William Faulkner</option>
            <option value="Action">Fyodor Dostoevsky</option>
            <option value="Crime">Ernest Hemingway</option>
          </select>
        </div>
        <button className="add-btn" type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Form;
