import { MyInvoicesWrapperStyled } from "./MyInvoicesWrapperStyled";
import { InvoiceInfoItem } from "../../components/molecules/invoicesInfo/InvoiceInfoItem";
import styled from "styled-components";
import { FiltersInvoices } from "./FiltersInvoices";

const InvoiceListHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  padding: 20px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.color.primary};
  border: solid 2px ${(props) => props.theme.color.accent};
  font-family: ${(props) => props.theme.fonts.titleFont};
  font-size: 1, 6em;
  color: ${(props) => props.theme.color.grey};
  border-radius: 20px;
  .container-edit {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const MyInvoicesWrapper = () => {
  return (
    <MyInvoicesWrapperStyled>
      <FiltersInvoices></FiltersInvoices>
      <InvoiceListHeaderStyled>
        <h2>Número de factura</h2>
        <h2>Cliente</h2>
        <h2>Fecha</h2>
        <h2>Importe</h2>
        <h2>Estado</h2>
        <div className="container-edit">
          <h2>Ver</h2>
          <h2>Editar</h2>
          <h2>Borrar</h2>
        </div>
      </InvoiceListHeaderStyled>

      <InvoiceInfoItem></InvoiceInfoItem>
      <InvoiceInfoItem></InvoiceInfoItem>
      <InvoiceInfoItem></InvoiceInfoItem>
      <InvoiceInfoItem></InvoiceInfoItem>
    </MyInvoicesWrapperStyled>
  );
};
