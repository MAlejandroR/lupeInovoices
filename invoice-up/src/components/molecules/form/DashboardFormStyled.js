import styled from "styled-components";

export const DashboardFormStyled = styled.form`
  /*  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  input {
    display: block;
    width: calc(100% - 20px);
    margin: 10px auto;
    padding: 8.5px 16px 8.5px 16px;
    border-radius: 40px;
    border: solid 2px white;
    color: white;
    background-color: transparent;
    &::placeholder {
      color: white;
    }
  }
  fieldset {
    width: 100%;
    height: auto;
    margin: 40px 0 20px;
    border: 2px solid transparent;
    border-top-color: ${(props) => props.theme.color.accent};
  }

  legend {
    margin: auto;
    padding: 0 10px;
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: ${(props) => props.theme.fontSizes.xsmall};
    font-weight: 300;
    color: ${(props) => props.theme.color.light_text};
  }

  input {
    display: block;
    width: 100%;
    // width: calc(100% - 20px);

    border-radius: 0.375rem;
    border: 1px solid ${(props) => props.theme.color.accent};
    outline: 0;
    background-color: transparent;
    padding: 0.75rem 1rem;
    color: rgba(243, 244, 246, 1);
    font-size: ${(props) => props.theme.fontSizes.xsmall};
    margin: 20px 0 10px;
  }
  input:focus {
    border-color: ${(props) => props.theme.color.accent};
    color: ${(props) => props.theme.color.dark_text};
    background-color: #fff;
  }
  .input-group {
    display: flex;
    column-gap: 20px;
  }

  p {
    margin-top: 12px;
    margin-bottom: -12px;
    font-size: ${(props) => props.theme.fontSizes.xsmall};
    color: ${(props) => props.theme.color.light_text};
    font-weight: 100;
  }
  .desing {
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
  }
  .inputRadio {
    margin: 0.4rem;
    padding: 50px;
  }
  .labelRadio {
    font-size: ${(props) => props.theme.fontSizes.xsmall};
    color: ${(props) => props.theme.color.light_text};
    font-weight: 300;
  }
  .collapsed {
    display: none;
  }
`;
