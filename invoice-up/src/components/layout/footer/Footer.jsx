import { Link } from "react-router-dom";
import { FooterStyled } from "./FooterStyled";
import { DiagonalSparatorUp } from "../../atoms/DiagonalSeparator";
import { Copyright } from "../../atoms/copyright/Copyright";
import styled from "styled-components";
import logo from "../../../assets/favicon.png";
//ojo cuidao! funciona pero no me gusta ** refactorizar **
/* const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "white",
};
 */
const StyledLink = styled(Link)`
  margin: 1rem;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  color: ${(props) => props.theme.color.light_text};
  &:hover {
    color: ${(props) => props.theme.color.accent};
  }
`;

export const Footer = () => {
  return (
    <FooterStyled>
      <DiagonalSparatorUp></DiagonalSparatorUp>
      <section>
        <div>
          {/*   <Link to="/">
            {" "}
            <img src={logo} alt="logo de invoice up" />
          </Link> */}
          <h2>InvoiceUp</h2>
          <p>Crea facturas en minutos. Optimiza tu tiempo y tu negocio.</p>
          <nav></nav>
        </div>
        <div>
          <h3>Enlaces Rápidos</h3>
          <nav>
            <ul>
              <li>
                <StyledLink to="/">Inicio </StyledLink>
              </li>
              <li>
                <StyledLink to="/calculadora-de-autonomos">
                  Calculadora de autónomos
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/about">Nosotros</StyledLink>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h3>Legal</h3>
          <nav>
            <ul>
              <li>
                <StyledLink to="/">Aviso Legal</StyledLink>
              </li>
              <li>
                <StyledLink to="/">Política de Cookies</StyledLink>
              </li>
              <li>
                <StyledLink to="/">Política de Privacidad</StyledLink>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h3>Contacto</h3>
          <ul>
            <p>C/ Factura fácil 5, 41013 Sevilla </p>
            <p>info@invoiceup.es</p>
            <p>789 79 82 17 - 789 45 42 07</p>
          </ul>
        </div>
      </section>
      <Copyright></Copyright>
    </FooterStyled>
  );
};
