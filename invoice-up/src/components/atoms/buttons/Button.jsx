import PropTypes from "prop-types";
import { ButtonStyled } from "./ButtonStyled";

export const Button = (props) => {
  return (
    <ButtonStyled variant={props.variant} {...props}>
      {" "}
      {props.action}
    </ButtonStyled>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  action: PropTypes.string.isRequired,
};

Button.defaultProps = {
  action: "facturar",
};
