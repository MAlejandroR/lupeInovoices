import styled from "styled-components";

export const HeroStyled = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 60px;
  padding: 80px;
  width: 100%;
  height: 80vh;
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.theme.color.primary},
    ${(props) => props.theme.color.secondary} 100%
  );
  overflow: hidden;

  div {
    max-width: 500px;
    animation: scale-up-center 1.4s;
  }
  h1 {
    font-family: ${(props) => props.theme.fonts.titleFont};
    font-size: ${(props) => props.theme.fontSizes.xlarge};
    padding-bottom: 20px;
    color: ${(props) => props.theme.color.light_text};
  }
  h3 {
    font-size: ${(props) => props.theme.fontSizes.normal};
    color: ${(props) => props.theme.color.light_text};
    padding-bottom: 20px;

    @media only screen and (max-width: 798px) {
      line-height: 1.5;
      font-weight: 300;
    }
  }
  img {
    width: 100%;
    max-width: 550px;
    object-fit: fill;
    animation: slide-left 1.2s linear both;
    @media only screen and (max-width: 798px) {
      display: none;
    }
  }

  @keyframes slide-left {
    0% {
      transform: translateX(500px);
    }
    100% {
      transform: translateX(-80px);
    }
  }
  @keyframes scale-up-center {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const HeroStyledBounce = styled(HeroStyled)`
  img {
    -webkit-animation: bounce-in-top 1.1s both;
    animation: bounce-in-top 1.1s both;
  }
  @-webkit-keyframes bounce-in-top {
    0% {
      -webkit-transform: translateY(-500px);
      transform: translateY(-500px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      -webkit-transform: translateY(-65px);
      transform: translateY(-65px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    72% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    81% {
      -webkit-transform: translateY(-28px);
      transform: translateY(-28px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    90% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    95% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
  @keyframes bounce-in-top {
    0% {
      -webkit-transform: translateY(-500px);
      transform: translateY(-500px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      -webkit-transform: translateY(-65px);
      transform: translateY(-65px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    72% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    81% {
      -webkit-transform: translateY(-28px);
      transform: translateY(-28px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    90% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    95% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
`;
