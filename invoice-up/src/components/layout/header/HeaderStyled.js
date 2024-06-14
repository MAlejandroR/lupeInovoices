import styled from "styled-components";

/* export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: ${(props) => props.theme.color.primary};

  h2 {
    font-weight: 400;
    font-family: ${(props) => props.theme.fonts.titleFont};
    // font-size: ${(props) => props.theme.fontSizes.xsmall};
    font-size: 3rem;
    color: ${(props) => props.theme.color.light_text};
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

  Button {
    margin: 0 5px;
  }
`;
 */
export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: ${(props) => props.theme.color.primary};
  /*   @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  } */

  h2 {
    font-weight: 400;
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: 3rem;
    color: ${(props) => props.theme.color.light_text};
    @media (max-width: 768px) {
      margin: 20px auto;
    }
  }

  p {
    display: none; // Ocultar en dispositivos pequeños
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

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
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    background-color: ${(props) => props.theme.color.primary};
    padding: 40px 0;
  }

  Button {
    margin: 0 5px;
  }
  .buttons-wrapper {
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      padding-top: 40px;
    }
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
