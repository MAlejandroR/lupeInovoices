import PropTypes from "prop-types";
import { Button } from "../../atoms/buttons/Button";
import { HeroStyled, HeroStyledBounce } from "./HeroStyled";
import { Link } from "react-router-dom";
import { DiagonalSparator } from "../../atoms/DiagonalSeparator";

export const Hero = (props) => {
  return (
    <HeroStyled>
      <div>
        <h1>{props.title}</h1>
        <h3>{props.subtitle}</h3>
        <Link to={props.path}>
          <Button action={props.action} onClick={props.onClick}></Button>
        </Link>
      </div>
      <img
        src={props.image}
        alt="illustration of man watching his income grow"
      ></img>
    </HeroStyled>
  );
};

Hero.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

Hero.defaultProps = {
  title: "Aqui va un título",
  subtitle: "Aqui va un subtítulo",
};

export const HeroBounce = (props) => {
  return (
    <HeroStyledBounce>
      <div>
        <h1>{props.title}</h1>
        <h3>{props.subtitle}</h3>
        <Link to={props.path}>
          <Button action={props.action} onClick={props.onClick}></Button>
        </Link>
      </div>
      <img
        src={props.image}
        alt="illustration of man watching his income grow"
      ></img>
    </HeroStyledBounce>
  );
};

HeroStyledBounce.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  onClick: PropTypes.function,
  path: PropTypes.string,
};

HeroStyledBounce.defaultProps = {
  title: "Aqui va un título",
  subtitle: "Aqui va un subtítulo",
  action: "click me!",
};
