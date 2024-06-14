import PropTypes from "prop-types";
import styled from "styled-components";

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: ${(props) => (props.align === "start" ? `start` : `center`)};

  padding: 100px 0 20px 0;

  h2 {
    max-width: 500px;
    text-align: center;
    text-align: ${(props) => (props.align === "start" ? "start" : "center")};
    padding-bottom: 20px;
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: ${(props) => props.theme.fontSizes.xlarge};
    color: ${(props) => props.theme.color.darl_text};
    @media only screen and (max-width: 798px) {
      max-width: 290px;
      font-size: ${(props) => props.theme.fontSizes.xlarge};
    }
  }

  p {
    width: 500px;
    text-align: center;
    text-align: ${(props) => (props.align === "start" ? "start" : "center")};
    padding-bottom: 40px;
    font-size: ${(props) => props.theme.fontSizes.normal};
    color: ${(props) => props.theme.color.darl_text};
    @media only screen and (max-width: 798px) {
      max-width: 300px;
      font-weight: 300;
    }
  }
  hr {
    width: 80px;
    border: 3px solid ${(props) => props.theme.color.primary};
    border-radius: 5px;
  }
`;

export const Heading = (props) => {
  return (
    <HeadingWrapper align={props.align}>
      <h2> {props.title} </h2>
      <p> {props.subtitle} </p>
      <hr />
    </HeadingWrapper>
  );
};

Heading.propTypes = {
  align: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

Heading.defaultProps = {
  title: "Aqui va un título",
  subtitle: "Aqui va un subtítulo",
};
