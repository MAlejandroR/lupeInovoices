import styled from "styled-components";

export const DashboardWrapper = styled.main`
  height: auto;
  padding: 40px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.theme.color.primary},
    ${(props) => props.theme.color.secondary} 100%
  );
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 80px;
  }
`;
