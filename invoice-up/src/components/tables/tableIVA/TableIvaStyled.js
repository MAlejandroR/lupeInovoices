import styled from "styled-components";

export const TableIvaStyled = styled.div`
  width: 500px;
  height: auto;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 10px;
  padding: 4rem 2rem;

  h3 {
    font-size: ${(props) => props.theme.fontSizes.small};
    font-weight: 300;
    padding-bottom: 4rem;
    font-family: ${(props) => props.theme.fonts.titleFont};
    color: ${(props) => props.theme.color.primary};
  }
  th {
    width: 500px;
    text-align: center;
    text-align: ${(props) => (props.align === "start" ? "start" : "center")};
    padding-bottom: 20px;
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.color.dark_text};
  }

  td {
    width: 500px;
    text-align: center;
    text-align: ${(props) => (props.align === "start" ? "start" : "center")};
    padding-bottom: 20px;
    font-size: ${(props) => props.theme.fontSizes.xsmall};
    color: ${(props) => props.theme.color.darl_text};
  }
`;
