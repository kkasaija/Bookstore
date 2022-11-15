const ADD_BOOK = 'ADD_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';

const newBook = (action) => {
  const { title, author, genre } = action;
  return {
    title,
    author,
    genre,
    id: Date.now(),
  };
};

const removeBook = (state = [], id) => (state.filter((book) => book.id !== id));

export default function booksReducer(state = [], action) {
  let books = null;
  switch (action.type) {
    case ADD_BOOK:
      books = [...state, newBook(action)];
      return books;
    case DELETE_BOOK:
      books = removeBook(state, action.id);
      return books;
    default:
      return state;
  }
}

export const addBook = (title, author, genre) => ({
  type: ADD_BOOK,
  title,
  author,
  genre,
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  id,
});
