import styled from "styled-components";

export const InvoiceClasicStyled = styled.main`
  position: relative;
  height: 100%;
  padding: 10%;
  background-color: peachpuff;
  .classic_companyDates {
    border: solid 2px black;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .classic_clientDates {
    margin-top: 20px;
    border: solid 2px black;
  }
  .classic_services {
    margin-top: 20px;
    border: solid 2px black;
    height: 350px;
    table {
      width: 100%;
    }
    th {
      background-color: blue;
    }
  }
  .classic_totals {
    position: absolute;
    right: 10%;
    bottom: 8%;
    width: 200px;
    margin-top: 20px;
    border: solid 2px black;
  }
`;
