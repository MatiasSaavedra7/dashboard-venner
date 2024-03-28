import { Link } from "react-router-dom";

export default function Aside() {
  return (
    <aside>
      <h4>Menu</h4>
      <ul className="menu">
        <li>
          <Link to="/" exact>
            <a href="">Home</a>
          </Link>
        </li>
        <li>
          <Link to="/products" exact>
            <a href="">Products</a>
          </Link>
        </li>
        <li>
          <Link to="/grapes" exact>
            <a href="">Grapes</a>
          </Link>
        </li>
        <li>
          <Link to="/countries" exact>
            <a href="">Countries</a>
          </Link>
        </li>
        <li>
          <Link to="/users" exact>
            <a href="">Users</a>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
