import { useState, useContext } from "react";
import imageDeafult from "../../../assets/avatar.webp";
import { Link } from "react-router-dom";
import {
  HeaderDashboardStyled,
  Nav,
  MenuToggle,
} from "./HeaderDashboardStyled";
import { FaBars, FaTimes } from "react-icons/fa";
import { UserContext } from "../../../context/UserContext"; // Importa el contexto del usuario

//ojo cuidao! funciona pero no me gusta ** refactorizar **
const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "white",
};

export const HeaderDashboard = () => {
  const { user } = useContext(UserContext); // Usa el contexto del usuario
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <HeaderDashboardStyled>
      <h2>
        <Link
          to="/"
          style={linkStyle}
          aria-label="Ir a inicio"
          title="Ir a inicio"
        >
          InvoiceUp
        </Link>
      </h2>
      <MenuToggle onClick={toggleMenu}>
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </MenuToggle>
      <Nav isOpen={isOpen}>
        <ul>
          <li>
            <Link to="/dashboard" style={linkStyle} onClick={handleLinkClick}>
              Nueva factura
            </Link>
          </li>
          <li>
            <Link
              to="/mis-facturas"
              style={linkStyle}
              onClick={handleLinkClick}
            >
              Mis facturas
            </Link>
          </li>
        </ul>
        <div className="container-user">
          <p>{user ? user : "Guest"}</p> {/* Muestra el usuario */}
          <img src={imageDeafult} alt="image usuario" />
        </div>
      </Nav>
    </HeaderDashboardStyled>
  );
};
