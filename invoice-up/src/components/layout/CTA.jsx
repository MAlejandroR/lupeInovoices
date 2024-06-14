import styled from "styled-components";
import PropTypes from "prop-types";
import { Heading } from "../molecules/Heading";
import { Button } from "../atoms/buttons/Button";
import { Link } from "react-router-dom";
import {
  DiagonalSparator,
  DiagonalSparatorUp,
} from "../atoms/DiagonalSeparator";

const StyledCTA = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;
  background-image: linear-gradient(
    to bottom,
    #fff,
    ${(props) => props.theme.color.light_accent} 100%
  );

  Button {
    margin: 40px 10px 250px 10px;
    @media only screen and (max-width: 798px) {
      margin: 40px 10px 80px 10px;
    }
  }

  .buttons-wrapper {
    @media only screen and (max-width: 798px) {
      display: flex;
    }
  }
`;
export const CTA = (props) => {
  return (
    <>
      <StyledCTA>
        <DiagonalSparatorUp></DiagonalSparatorUp>
        <Heading title={props.title} subtitle={props.subtitle}></Heading>
        <div className="buttons-wrapper">
          <Link to={props.path1}>
            {" "}
            <Button action="Calculadora de Autónomos"></Button>
          </Link>
          <Link to={props.path2}>
            {" "}
            <Button variant="outline" action="Comienza a facturar"></Button>
          </Link>
        </div>

        <DiagonalSparator></DiagonalSparator>
      </StyledCTA>
    </>
  );
};
CTA.propTypes = {
  path1: PropTypes.string,
  path2: PropTypes.string,
};
