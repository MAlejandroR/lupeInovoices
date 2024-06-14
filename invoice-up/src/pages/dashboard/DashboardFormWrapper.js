import styled from "styled-components";

export const DashboardFormWrapper = styled.div`
  width: 500px;
  min-width: 320px;
  height: auto;
  padding: 40px;
  background-color: ${(props) => props.theme.color.secondary};
  border-radius: 20px;
  box-shadow: 10px 10px 116px -2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 116px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 116px -2px rgba(0, 0, 0, 0.75);
`;
