import styled from "styled-components";

export const PreviewerStyled = styled.div`
  width: 600px;
  aspect-ratio: 1/1.41;
  min-width: 320px;
  background-color: ${(props) => props.theme.color.light_text};
  box-shadow: 10px 10px 116px -2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 116px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 116px -2px rgba(0, 0, 0, 0.75);

  img {
    display: block;
    margin: auto;
    width: 100%;
    max-width: 100px;
    object-fit: fill;
    margin-bottom: 20px;
  }
`;
