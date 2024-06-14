import styled from "styled-components";

/* export const HeaderDashboardStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: ${(props) => props.theme.color.primary};
  box-shadow: -1px 10px 20px 0px rgba(0, 0, 0, 0.33);
  -webkit-box-shadow: -1px 10px 20px 0px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: -1px 10px 20px 0px rgba(0, 0, 0, 0.33);

  h2 {
    font-weight: 400;
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: ${(props) => props.theme.fontSizes.large};
    color: ${(props) => props.theme.color.light_text};
  }
  p {
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.color.light_text};
  }

  li {
    list-style: none;
    display: inline-block;
    padding: 0 40px;
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: ${(props) => props.theme.fontSizes.xsmall};
    color: ${(props) => props.theme.color.light_text};
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme.color.accent};
      padding: 8px 16px;
      border-radius: 50px;
    }
  }

  p:hover {
    color: ${(props) => props.theme.color.accent};
  }
  div {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  img {
    width: 50px;
  }
`;
 */

export const HeaderDashboardStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: ${(props) => props.theme.color.primary};
  /*  height: auto; */

  h2 {
    font-weight: 400;
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: 3rem;
    color: ${(props) => props.theme.color.light_text};
    @media (max-width: 768px) {
      margin: 20px auto;
    }
  }

  div.container-user {
    display: flex;
    align-items: center;
    gap: 2rem;
    p {
      font-size: ${(props) => props.theme.fontSizes.small};
      color: ${(props) => props.theme.color.light_text};
    }
    img {
      width: 50px;
    }
    @media (max-width: 768px) {
      display: none; // Ocultar nombre de usuario y imagen en móviles
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Nav = styled.nav`
  display: flex;
  padding: 20px 0;

  ul {
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      width: 100%;
      flex-direction: column;
      gap: 40px;
    }
  }

  li {
    list-style: none;
    display: inline-block;
    padding: 0 20px;
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: ${(props) => props.theme.fontSizes.xsmall};
    color: ${(props) => props.theme.color.light_text};
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme.color.accent};
      padding: 8px 6px;
      border-radius: 50px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};

    /*     ul {
      flex-direction: column;
      width: 100%;
    }

    li {
      padding: 10px 0;
      text-align: center;
    } */
  }
`;

export const MenuToggle = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    color: ${(props) => props.theme.color.light_text};
    cursor: pointer;
    margin: auto;
  }
`;
export const MenuIcon = styled.div`
  font-size: 2rem;
  color: ${(props) => props.theme.color.light_text};
`;
