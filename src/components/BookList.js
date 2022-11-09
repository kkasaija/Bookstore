import Book from './Book';

const BookList = () => {
  const books = [
    {
      id: 1, title: 'things fall apart', author: 'Chinua Achebe', genre: 'History',
    },
  ];
  return books.map((book) => (
    <Book genre={book.genre} title={book.title} author={book.author} key={book.id} />
  ));
};

export default BookList;
