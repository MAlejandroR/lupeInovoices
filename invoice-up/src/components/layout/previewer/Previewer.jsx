import { useState } from "react";
import { InvoiceClasic } from "../invoice/InvoiceClasic";
import { InvoiceMinimal } from "../invoice/InvoiceMinimal";
import { InvoiceModern } from "../invoice/InvoiceModern";
import { PreviewerStyled } from "./PreviewerStyled";

export const Previewer = ({ dataForm }) => {
  //dataForm has been sended by dashboard
  const [template, setTemplate] = useState(<InvoiceClasic></InvoiceClasic>);

  return (
    <PreviewerStyled>
      {dataForm.template === "classic" && (
        <InvoiceClasic dataForm={dataForm}></InvoiceClasic>
      )}
      {dataForm.template === "minimal" && (
        <InvoiceMinimal dataForm={dataForm}></InvoiceMinimal>
      )}
      {dataForm.template === "moderno" && (
        <InvoiceModern dataForm={dataForm}></InvoiceModern>
      )}
    </PreviewerStyled>
  );
};
