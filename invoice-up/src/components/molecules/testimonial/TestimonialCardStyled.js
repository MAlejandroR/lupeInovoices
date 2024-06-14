import styled from "styled-components";

export const TestimonialCardStyled = styled.div`
  display: inline-block;
  position: relative;
  width: 320px;
  min-width: 320px;
  padding: 80px 30px;
  margin: 50px 20px;
  aspect-ratio: 1/1;
  border-radius: 5px;
  overflow: hidden;
  background-color: #ebeaff;
  box-shadow: -1px 2px 29px -1px rgba(79, 73, 204, 0.75);
  -webkit-box-shadow: -1px 2px 29px -1px rgba(79, 73, 204, 0.75);
  -moz-box-shadow: -1px 2px 29px -1px rgba(79, 73, 204, 0.75);

  div {
    position: absolute;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.theme.color.primary};
    border-radius: 50%;
  }
  svg {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    background-color: ${(props) => props.theme.color.primary};
    border-radius: 50%;
  }

  h3 {
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: ${(props) => props.theme.fontSizes.normal};
  }
  h5 {
    font-size: ${(props) => props.theme.fontSizes.small};
    font-weight: 100;
  }

  p {
    padding: 20px 0;
    font-size: ${(props) => props.theme.fontSizes.xsmall};
    font-weight: 300;
  }

  img {
    display: block;
    margin: auto;
    width: 100%;
    aspect-ratio: 1/1;
    max-width: 50px;
    border-radius: 50%;
    object-fit: fill;
    margin-bottom: 20px;
  }
`;
