import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const Url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/uG85s6As23HdgNJdU6zM/books';
const ADD_BOOK = 'bookStore/booksReducer/ADD_BOOK';
const DELETE_BOOK = 'bookStore/booksReducer/DELETE_BOOK';
const DISPLAY_BOOKS = 'bookstore/booksReducer/DISPLAY_BOOKS';

const initialState = {
  booksLists: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${DISPLAY_BOOKS}/fulfilled`:
      return {
        ...state,
        booksLists: [...action.payload],
      };
    case `${ADD_BOOK}/fulfilled`:
      return {
        ...state,
        booksLists: [...state.booksLists, action.payload],
      };
    case `${DELETE_BOOK}/fulfilled`:
      return {
        ...state,
        booksLists: state.booksLists.filter((book) => book.item_id !== action.payload),
      };
    default:
      return state;
  }
};

const convertKeys = (dataKey) => {
  const data = Object.keys(dataKey).map((id) => ({
    item_id: id,
    title: dataKey[id][0].title,
    author: dataKey[id][0].author,
    category: dataKey[id][0].category,
  }));
  return data;
};

const displayBooks = createAsyncThunk(DISPLAY_BOOKS, async () => {
  const result = await fetch(Url);
  const data = await result.json();
  const convertKey = convertKeys(data);
  return convertKey;
});

const addBook = createAsyncThunk(ADD_BOOK, async (book) => {
  await axios.post(Url, book);
  return book;
});

const deleteBook = createAsyncThunk(DELETE_BOOK, async (id) => {
  await axios.delete(`${Url}/${id}`);
  return id;
});

export { addBook, displayBooks, deleteBook };
