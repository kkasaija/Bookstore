import './Form.css';

const Form = () => (
  <div className="form-container">
    <h2 className="form-title">ADD NEW BOOK</h2>
    <form>
      <input className="form-book-title" type="text" required placeholder="Title" />
      <div className="form-book-category">
        <select className="select" default name="category">
          <option value="">
            Author
          </option>
          <option value="History">William Shakespeare</option>
          <option value="Science">William Faulkner</option>
          <option value="Action">Fyodor Dostoevsky</option>
          <option value="Crime">Ernest Hemingway</option>
        </select>
      </div>
      <button className="add-btn" type="submit">
        ADD BOOK
      </button>
    </form>
  </div>
);

export default Form;
