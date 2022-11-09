import './Form.css';

const Form = () => (
  <div className="form-container">
    <h2 className="form-title">ADD NEW BOOK</h2>
    <form>
      <input className="form-book-title" type="text" required placeholder="Title" />
      <div className="form-book-category">
        <select className="select" default name="category">
          <option value="">
            Category
          </option>
          <option value="History">History</option>
          <option value="Romance">Romance</option>
          <option value="Science">Sience</option>
          <option value="Action">Action</option>
          <option value="Crime">Crime</option>
        </select>
      </div>
      <button className="add-btn" type="submit">
        ADD BOOK
      </button>
    </form>
  </div>
);

export default Form;
