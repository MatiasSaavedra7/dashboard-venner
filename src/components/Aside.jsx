import { Link } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";
import { FaWineBottle } from "react-icons/fa6";
import { FaWineGlassEmpty } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export default function Aside() {
  return (
    <aside>
      <h4>Menú</h4>
      <ul className="menu">
        <li>
          <Link to="/">
            <FaHouse/> Inicio
          </Link>
        </li>
        <li>
          <Link to="/products">
            <FaWineBottle/> Productos
          </Link>
        </li>
        <li>
          <Link to="/grapes">
            <FaWineGlassEmpty/> Uvas
          </Link>
        </li>
        <li>
          <Link to="/countries">
            <FaMapMarkerAlt/> Países
          </Link>
        </li>
        <li>
          <Link to="/users">
            <FaUser/> Usuarios
          </Link>
        </li>
      </ul>
    </aside>
  );
}
