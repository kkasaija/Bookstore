import BookList from './BookList';
import Form from './Form';

const BooksContainer = () => (
  <section className="booklist" style={{ position: 'fixed', marginTop: 30 }}>
    <BookList />
    <Form />
  </section>
);

export default BooksContainer;
