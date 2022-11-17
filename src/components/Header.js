import { Link } from 'react-router-dom';

const Header = () => (
  <header style={{ position: 'sticky', top: 0, zIndex: 1 }}>
    <div className="header">
      <h1 className="Bookstore-CMS">Bookstore CMS</h1>
      <nav className="nav">
        <ul className="d-flex">
          <li>
            <Link className="BOOKS" to="/">Books</Link>
          </li>
          <li>
            <Link className="CATEGORIES" to="categories">Categories</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
