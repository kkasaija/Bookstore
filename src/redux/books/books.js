const Url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/uG85s6As23HdgNJdU6zM/books';
const ADD_BOOK = 'bookStore/booksReducer/ADD_BOOK';
const DELETE_BOOK = 'bookStore/booksReducer/DELETE_BOOK';
const DISPLAY_BOOKS = 'bookstore/booksReducer/DISPLAY_BOOKS';

// Reducer
export default function booksReducer(state = [], action = {}) {
  switch (action.type) {
    case DISPLAY_BOOKS:
      return action.payload;
    case ADD_BOOK:
      return [...state, action.payload];
    case DELETE_BOOK:
      return [...state.filter((book) => (book.id !== action.payload))];
    default: return state;
  }
}

// Action Creators
const addBook = (book) => async (dispatch) => {
  await fetch(Url, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => dispatch({ type: ADD_BOOK, payload: book }));
};

const displayBooks = () => async (dispatch) => {
  await fetch(Url)
    .then((res) => res.json())
    .then((books) => {
      const booksArray = [];
      Object.keys(books).forEach((key) => {
        booksArray.push({
          item_id: key,
          author: books[key][0].author,
          title: books[key][0].title,
          category: books[key][0].category,
        });
      });
      dispatch({ type: DISPLAY_BOOKS, payload: booksArray });
    });
};

const deleteBook = (bookID) => async (dispatch) => {
  await fetch(`${Url}/${bookID}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => dispatch({ type: DELETE_BOOK, payload: bookID }));
};

export { addBook, displayBooks, deleteBook };
