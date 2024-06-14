import styled from "styled-components";

export const DiagonalSparator = styled.div`
  width: 0;
  height: 0;
  border-left: 100vw solid transparent;
  border-bottom: 13.95vw solid #fff;
  margin-top: -13.9vw;
`;

export const DiagonalSparatorUp = styled(DiagonalSparator)`
  border-left: 100vw solid #fff;
  border-bottom: 13.95vw solid transparent;
  margin-top: 0;
`;
