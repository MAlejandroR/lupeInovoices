import styled from "styled-components";
import PropTypes from "prop-types";

const StyledCard = styled.article`
  width: 320px;
  padding: 80px 20px;
  border: 1px solid ${(props) => props.theme.color.light_primary};
  border-radius: 5px;
  background-color: #fafafa;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(0.9);
    background-color: ${(props) => props.theme.color.light_text};
    border: 2px solid ${(props) => props.theme.color.primary};
  }
  @media only screen and (max-width: 798px) {
    padding: 40px 20px;
  }
  h3,
  p {
    text-align: center;
  }

  h3 {
    padding-bottom: 20px;
    font-size: ${(props) => props.theme.fontSizes.normal};
  }
  p {
    font-size: ${(props) => props.theme.fontSizes.small};
    @media only screen and (max-width: 798px) {
      font-weight: 300;
    }
  }
  img {
    display: block;
    margin: auto;
    width: 100%;
    max-width: 100px;
    object-fit: fill;
    margin-bottom: 20px;
    @media only screen and (max-width: 798px) {
      max-width: 70px;
    }
  }
`;

export const FeactureCard = (props) => {
  return (
    <StyledCard>
      <img src={props.image} alt={props.alt} />
      <h3> {props.title}</h3>
      <p> {props.text}</p>
    </StyledCard>
  );
};

FeactureCard.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

FeactureCard.defaultProps = {
  title: "Título",
};
