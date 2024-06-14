import styled from "styled-components";

export const InvoiceInfoItemStyled = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 20px;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.color.primary};
  border: solid 2px ${(props) => props.theme.color.accent};
  font-family: ${(props) => props.theme.fonts.titleFont};
  font-size: 1, 6em;
  color: ${(props) => props.theme.color.grey};
  border-radius: 20px;

  &:hover {
    background-color: ${(props) => props.theme.color.secondary};
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .invoice-number,
    .invoice-date {
      display: none; // Ocultar estos elementos en pantallas pequeñas
    }
  }

  .container-edit,
  .container-info {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
    padding: 8px 0;
  }

  button {
    padding: 10px;
    border: none;
    border-radius: 50%;
  }

  .button-danger {
    color: ${(props) => props.theme.color.accent};
  }
  button:hover {
    background-color: transparent;
  }
`;
