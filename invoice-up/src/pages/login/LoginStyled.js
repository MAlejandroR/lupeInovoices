import styled from "styled-components";

export const LoginStyled = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.theme.color.primary},
    ${(props) => props.theme.color.secondary} 100%
  );

  div {
    display: flex;
    flex-wrap: wrap;
    border: none;
    margin: 0 auto;
    border-radius: 20px;
    overflow: hidden;
    background-color: ${(props) => props.theme.color.secondary};
    box-shadow: 10px 10px 116px -2px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 10px 10px 116px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 116px -2px rgba(0, 0, 0, 0.75);
  }
  img {
    width: 100%;
    max-width: 380px;
    object-fit: contain;
    display: block;
    margin: auto;
    background-color: #fff;
    object-fit: fill;
    padding: 20px;
  }
  form {
    display: block;
    margin: auto;
    width: 380px;
    background-color: ${(props) => props.theme.color.secondary};
    padding: 4rem;
    color: ${(props) => props.theme.color.grey};

    h1 {
      font-size: ${(props) => props.theme.fontSizes.large};
    }
    h3 {
      font-size: ${(props) => props.theme.fontSizes.xsmall};
      font-weight: 300;
      padding-bottom: 2rem;
    }
    h1,
    h3 {
      font-family: ${(props) => props.theme.fonts.titleFont};
      color: ${(props) => props.theme.color.light_text};
    }

    label {
      font-size: ${(props) => props.theme.fontSizes.xsmall};
      color: rgba(156, 163, 175, 1);
      padding-bottom: 45px;
    }
    input {
      display: block;
      width: 100%;
      border-radius: 0.375rem;
      border: 1px solid ${(props) => props.theme.color.light_accent};
      outline: 0;
      background-color: ${(props) => props.theme.color.secondary};
      padding: 0.75rem 1rem;
      color: rgba(243, 244, 246, 1);
      font-size: ${(props) => props.theme.fontSizes.xsmall};
      margin: 5px 0 10px;
    }
    input:focus {
      border-color: ${(props) => props.theme.color.accent};
      color: ${(props) => props.theme.color.dark_text};
      background-color: #fff;
    }
  }

  Button {
    margin: 40px 5px 0;
  }
`;
