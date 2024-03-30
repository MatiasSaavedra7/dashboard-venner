import { Link } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";
import { FaWineBottle } from "react-icons/fa6";
import { FaWineGlassEmpty } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export default function Aside() {
  return (
    <aside>
      <h4>Menu</h4>
      <ul className="menu">
        <li>
          <Link to="/">
            <FaHouse/> Home
          </Link>
        </li>
        <li>
          <Link to="/products">
            <FaWineBottle/> Products
          </Link>
        </li>
        <li>
          <Link to="/grapes">
            <FaWineGlassEmpty/> Grapes
          </Link>
        </li>
        <li>
          <Link to="/countries">
            <FaMapMarkerAlt/> Countries
          </Link>
        </li>
        <li>
          <Link to="/users">
            <FaUser/> Users
          </Link>
        </li>
      </ul>
    </aside>
  );
}
