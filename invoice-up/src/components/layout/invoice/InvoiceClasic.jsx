import { InvoiceClasicStyled } from "./InvoiceClasicStyled";
import imageDeafult from "../../../assets/avatar.webp";
export const InvoiceClasic = ({ dataForm }) => {
  const subtotal = dataForm.price * dataForm.quantity;

  return (
    <InvoiceClasicStyled>
      <h1>Soy la factura {dataForm.template}</h1>
      <div className="classic_companyDates">
        <div>
          <img
            src={dataForm.logo || imageDeafult}
            alt="logo de ${dataForm.company_name}"
          />
        </div>
        <div>
          <h2>Nº Factura:{dataForm.number_invoice}</h2>
          <h2>{dataForm.company_name || ""} </h2>
          <p>{dataForm.company_address}</p>
          <p>TELÉFONO:{dataForm.company_phone}</p>
          <p>CIF:{dataForm.company_cif}</p>
          <p>EMAIL:{dataForm.company_mail}</p>
        </div>
      </div>
      <div className="classic_clientDates">
        <h2>Cliente:</h2>
        <p>{dataForm.client_name || ""}</p>
        <p>{dataForm.client_address}</p>
        <p>TELÉFONO:{dataForm.client_phone}</p>
        <p>CIF:{dataForm.client_cif}</p>
        <p>EMAIL:{dataForm.client_mail}</p>
      </div>
      <div className="classic_services">
        <table>
          <tr>
            <th>Concepto</th>
            <th>Cant.</th>
            <th>Precio</th>
            <th>Subtotal</th>
          </tr>
          <tr>
            <td>{dataForm.service}</td>
            <td>{dataForm.quantity}</td>
            <td>{dataForm.price}€</td>
            <td>{subtotal}€</td>
          </tr>
        </table>
        <div className="classic_totals">
          <p>TOTAL:{subtotal}€</p>
          <p>
            Retenciones({dataForm.irpf}%):{subtotal}€
          </p>
          <p>
            IVA({dataForm.iva}%)€:{subtotal}€{" "}
          </p>
          <p>TOTAL DEVENGADO:</p>
        </div>
      </div>
    </InvoiceClasicStyled>
  );
};
