import Book from './Book';

const BookList = () => {
  const books = [
    {
      id: 1, title: 'Book tile', author: 'Book author',
    },
  ];
  return books.map((book) => (
    <Book title={book.title} author={book.author} key={book.id} />
  ));
};

export default BookList;
