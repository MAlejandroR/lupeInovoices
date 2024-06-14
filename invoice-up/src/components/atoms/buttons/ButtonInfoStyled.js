import styled from "styled-components";

export const ButtonInfoStyled = styled.button`
  margin-left: 10px;
  padding: 10px 15px;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.light_text};
  border-radius: 50px;
  font-family: ${(props) => props.theme.fonts.titleFont};
  border: none;

  &:hover {
    background-color: ${(props) => props.theme.color.light_text};
    color: ${(props) => props.theme.color.primary};
    border: 2px solid ${(props) => props.theme.color.primary};
  }
`;
