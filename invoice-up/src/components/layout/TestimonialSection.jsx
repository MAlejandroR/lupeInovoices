import { Heading } from "../molecules/Heading";
import { TestimonialCard } from "../molecules/testimonial/TestimonialCard";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px 0;

  ul {
    background-color: white;
    aspect-ratio: 2/1;
    width: 50vw;
    position: relative;
    display: flex;
    overflow: auto;
    overflow-x: scroll;
    padding: 0 20px;
    @media only screen and (max-width: 798px) {
      aspect-ratio: 2/3;
      width: 90vw;
    }
  }
  /* Define the scrollbar style */
  ul::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  /* Define the thumb style */
  ul::-webkit-scrollbar-thumb {
    background: linear-gradient(
      to bottom right,
      ${(props) => props.theme.color.primary} 0%,
      ${(props) => props.theme.color.secondary} 100%
    );
    border-radius: 5px;
  }

  /* Define the track style */
  ul::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.color.grey};
    border: 1px solid ${(props) => props.theme.color.grey};
  }

  /* Define the button style */
  ul::-webkit-scrollbar-button {
    background-color: ${(props) => props.theme.color.grey};
    border-radius: 5px;
  }

  /* Define the button style when being hovered over */
  ul::-webkit-scrollbar-button:hover {
    background-color: #999999;
  }
`;

export const TestimonialSection = () => {
  return (
    <Wrapper>
      <Heading
        title="Nuestros clientes opinan"
        subtitle="Las opiniones de nuestros clientes son nuestras mejor recompensa."
      ></Heading>
      <ul>
        <TestimonialCard></TestimonialCard>
      </ul>
    </Wrapper>
  );
};
