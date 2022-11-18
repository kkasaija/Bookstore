import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import '../styles/Form.css';

const Form = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ title: '', author: '', category: '' });
  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title.trim() && form.author.trim()) {
      const data = {
        item_id: Date.now(),
        title: form.title,
        author: form.author,
        category: form.category,
      };
      dispatch(addBook(data));
      setForm({ title: '', author: '', category: '' });
    }
  };

  return (
    <>
      <h1>ADD BOOK</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book title"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Book author"
          name="author"
          value={form.author}
          onChange={handleChange}
        />
        <button type="submit" id="add-book">Add Book</button>
      </form>
    </>
  );
};

export default Form;
