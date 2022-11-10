import Book from './Book';

const BookList = () => {
  const books = [
    {
      id: 1, title: 'Suppose you were an idiot', author: 'Mark Twain', genre: 'Biography & Autobiography',
    },
  ];
  return books.map((book) => (
    <Book genre={book.genre} title={book.title} author={book.author} key={book.id} />
  ));
};

export default BookList;
