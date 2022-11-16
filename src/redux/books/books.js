const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const DELETE_BOOK = 'bookStore/books/DELETE_BOOK';

const newBook = (action) => {
  const {
    title, author, genre, id,
  } = action;
  return {
    title,
    author,
    genre,
    completed: '0%',
    chapter: '0',
    id,
  };
};

const removeBook = (state = [], action) => {
  const books = state.filter((book) => book.id !== action.title);
  return books;
};

export default function booksReducer(state = [], action) {
  let books = [];
  switch (action.type) {
    case ADD_BOOK:
      books = [...state, newBook(action)];
      return books;
    case DELETE_BOOK:
      books = removeBook(state, action);
      return books;
    default:
      return state;
  }
}

export const addBook = ({ title, author, genre }) => ({
  type: ADD_BOOK,
  title,
  author,
  genre,
});

export const deleteBook = ({ id }) => ({
  type: DELETE_BOOK,
  id,
});
