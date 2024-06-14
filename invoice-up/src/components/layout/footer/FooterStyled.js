import styled from "styled-components";

export const FooterStyled = styled.footer`
  margin-top: 0px;
  height: 70vh;
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.theme.color.primary},
    ${(props) => props.theme.color.secondary} 100%
  );
  overflow: hidden;
  @media only screen and (max-width: 798px) {
    height: auto;
  }

  img {
    background-color: aliceblue;
    border-radius: 100%;
    display: block;
    margin: auto;
    width: 100%;
    max-width: 100px;
    object-fit: fill;
    margin-bottom: 20px;
    /*   @media only screen and (max-width: 798px) {
      max-width: 150px;
    } */
  }
  div {
    padding-top: 40px;
  }
  section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media only screen and (max-width: 798px) {
      flex-direction: column;
    }
  }
  h2 {
    max-width: 800px;
    text-align: start;
    padding-bottom: 20px;
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: ${(props) => props.theme.fontSizes.large};
    color: ${(props) => props.theme.color.light_text};
  }
  h3 {
    max-width: 800px;
    text-align: start;
    padding-bottom: 20px;
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: ${(props) => props.theme.fontSizes.normal};
    color: ${(props) => props.theme.color.light_text};
  }
  p,
  li {
    width: 220px;
    text-align: center;
    text-align: start;
    padding-bottom: 20px;
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: 1.4rem;
    color: ${(props) => props.theme.color.light_text};
    line-height: 1.5;
  }
  li {
    position: relative;
    list-style: none;
    cursor: pointer;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 4px;
      bottom: 8px;
      left: 0;
      background-color: ${(props) => props.theme.color.accent};
      transform: scaleX(0);
      transition: all 0.2s ease-in-out;
    }
    &:hover::after {
      transform: scaleX(1);
    }
  }
`;
