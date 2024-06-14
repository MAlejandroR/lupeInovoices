import { Link } from "react-router-dom";
import { Button } from "../../atoms/buttons/Button";
import { HeaderStyled } from "./HeaderStyled";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Nav, MenuToggle, MenuIcon } from "./HeaderStyled";

//ojo cuidao! funciona pero no me gusta ** refactorizar **
const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "white",
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <HeaderStyled>
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
            <Link to="/" style={linkStyle} onClick={handleLinkClick}>
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/calculadora-de-autonomos"
              style={linkStyle}
              onClick={handleLinkClick}
            >
              Calculadora de autónomos
            </Link>
          </li>
          <li onClick={handleLinkClick}>About</li>
        </ul>
        <div className="buttons-wrapper">
          {" "}
          <Link to="/login" onClick={handleLinkClick}>
            {" "}
            <Button action="Empezar a facturar"></Button>
          </Link>
          <Link to="/register" onClick={handleLinkClick}>
            <Button action="Crear cuenta" variant="outline"></Button>
          </Link>
        </div>
      </Nav>
    </HeaderStyled>
  );
};
