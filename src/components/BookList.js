import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayBooks } from '../redux/books/books';
import Form from './Form';
import Book from './Book';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer.booksLists);
  useEffect(() => {
    dispatch(displayBooks());
  }, [dispatch]);

  return (
    <>
      {books.map((book) => (
        <Book key={book.item_id} bookProps={book} />
      ))}
      <Form />
    </>
  );
};

export default Books;
