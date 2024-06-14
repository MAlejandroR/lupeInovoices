import { ButtonInfoStyled } from "./ButtonInfoStyled";
import PropTypes from "prop-types";

export const ButtonInfo = (props) => {
  return <ButtonInfoStyled {...props}>{props.action}</ButtonInfoStyled>;
};

ButtonInfo.propTypes = {
  variant: PropTypes.string,
  action: PropTypes.string.isRequired,
};

ButtonInfo.defaultProps = {
  action: "+ info",
};
