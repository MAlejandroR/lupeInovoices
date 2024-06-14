import styled from "styled-components";
import { useState } from "react";

const AccordionFieldsetStyled = styled.div`
  padding: 20px 0;
  .accordion {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    width: 100%;
    text-align: left;

    outline: none;
    transition: 0.8s;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.color.accent};
    border-radius: 0.375rem;
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: ${(props) => props.theme.fontSizes.xsmall};
    color: ${(props) => props.theme.color.light_text};
    font-weight: 100;
    svg {
      border: none;
      margin-right: -165px;
    }
  }

  .accordion.active {
    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.light_text};
  }
  .accordion.rotate {
    transform: rotate(180deg);
    transition-duration: 500ms;
  }

  .panel {
    padding: 0 18px;
    display: none;
    overflow: hidden;
    background-color: white;
    //border: 1px solid #ccc;
    margin-top: 10px;
    background-color: #4f49cc;
  }
`;

export const AccordionFieldset = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = (ev) => {
    ev.preventDefault();
    setIsActive(!isActive);
  };
  return (
    <AccordionFieldsetStyled>
      <button
        className={`accordion ${isActive ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        {title}{" "}
        {
          <svg
            display="flex"
            width="34"
            height="34"
            className={`accordion ${isActive ? "rotate" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="#FAF9F7"
              d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
            />
          </svg>
        }
      </button>
      <fieldset
        className="panel"
        style={{ display: isActive ? "block" : "none" }}
      >
        {children}
      </fieldset>
    </AccordionFieldsetStyled>
  );
};
