import PropTypes from "prop-types";
import styled from "styled-components";
import { Heading } from "../molecules/Heading";
import { Button } from "../atoms/buttons/Button";
import { Link } from "react-router-dom";

const InfoWrapper = styled.section`
  display: flex;
  /*   flex-direction: row; */
  flex-direction: ${(props) =>
    props.direction === "reverse" ? "row-reverse" : "row"};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10rem;
  padding-bottom: 100px;
  @media only screen and (max-width: 798px) {
    padding: 0 70px 100px;
    gap: 1.5rem;
  }

  p {
    font-size: ${(props) => props.theme.fontSizes.small};
    padding-bottom: 40px;
    @media only screen and (max-width: 798px) {
      font-weight: 300;
    }
  }

  img {
    width: 100%;
    max-width: 550px;
    object-fit: fill;

    /* animation to scroll. Nt supported by safari */
    view-timeline-name: --image;
    view-timeline-axis: block;
    animation-timeline: --image;
    animation-name: show;
    animation-range: entry 25% cover 50%;
  }
  @keyframes show {
    from {
      opacity: 0;
      scale: 25%;
    }

    to {
      opacity: 1;
      scale: 100%;
    }
  }
  div {
    max-width: 500px;
    animation: scale-up-center 1.4s;

    @keyframes scale-up-center {
      0% {
        transform: scale(0.5);
      }
      100% {
        transform: scale(1);
      }
    }
  }
`;

export const InfoSection = (props) => {
  return (
    <InfoWrapper direction={props.direction}>
      <img src={props.image} alt={props.alt} />
      <div>
        <Heading
          align="start"
          title={props.title}
          subtitle={props.subtitle}
        ></Heading>
        <p> {props.text} </p>
        <Link to={props.path}>
          <Button action={props.action}></Button>
        </Link>
      </div>
    </InfoWrapper>
  );
};

InfoSection.propTypes = {
  direction: PropTypes.string,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
  text: PropTypes.string.isRequired,
  path: PropTypes.string,
};

/* Button.propTypes = {
  variant: PropTypes.string,
  action: PropTypes.string.isRequired,
};

Button.defaultProps = {
  action: "facturar",
};

Heading.propTypes = {
  align: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

Heading.defaultProps = {
  title: "Aqui va un título",
  subtitletitle: "Aqui va un subtítulo",
};
 */
