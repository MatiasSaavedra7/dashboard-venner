import Logo from "../assets/images/venner-dashboard.svg"
import { FaMessage } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { FaUserAstronaut } from "react-icons/fa";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img src={Logo} alt="Logo de Venner" />
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <button type="submit"><PiMagnifyingGlassBold/></button>
        </div>
        <div className="icons-container">
          <div><FaMessage/></div>
          <div><FaBell/></div>
          <div><FaUserAstronaut/></div>
        </div>
      </div>
      <hr />
    </header>
  );
}
