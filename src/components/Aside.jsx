import { Link } from "react-router-dom";

export default function Aside() {
  return (
    <aside>
      <h4>Menu</h4>
      <ul className="menu">
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products">
            Products
          </Link>
        </li>
        <li>
          <Link to="/grapes">
            Grapes
          </Link>
        </li>
        <li>
          <Link to="/countries">
            Countries
          </Link>
        </li>
        <li>
          <Link to="/users">
            Users
          </Link>
        </li>
      </ul>
    </aside>
  );
}
