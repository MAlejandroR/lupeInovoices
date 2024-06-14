import styled from "styled-components";

export const BlogCardStyled = styled.article`
  display: inline-block;
  position: relative;
  width: 320px;
  padding: 80px 30px;
  margin: 0 10px;

  border-radius: 5px;
  overflow: hidden;
  background-color: #ebeaff;
  background-color: #fff;
  // box-shadow: -1px 2px 29px -1px rgba(79, 73, 204, 0.75);
  // -webkit-box-shadow: -1px 2px 29px -1px rgba(79, 73, 204, 0.75);
  // -moz-box-shadow: -1px 2px 29px -1px rgba(79, 73, 204, 0.75);

  div {
    position: absolute;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.theme.color.primary};
    border-radius: 50%;
  }

  h3 {
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: ${(props) => props.theme.fontSizes.normal};
  }
  h4 {
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: ${(props) => props.theme.fontSizes.small};
    padding: 20px 0;
  }

  p {
    padding: 20px 0;
    font-size: ${(props) => props.theme.fontSizes.xsmall};
    font-weight: 300;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  img {
    display: block;
    margin: auto;
    width: 100%;
    aspect-ratio: 1/1;
    // max-width: 200px;

    object-fit: fill;
    margin-bottom: 20px;
  }
`;
