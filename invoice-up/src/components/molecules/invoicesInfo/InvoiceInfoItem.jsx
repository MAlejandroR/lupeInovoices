import { useState } from "react";
import { InvoiceInfoItemStyled } from "./InvoiceInfoItemStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
export const InvoiceInfoItem = () => {
  // Crear estados para el texto y el color
  const [text, setText] = useState("pendiente");
  const [color, setColor] = useState("red");

  // Función para manejar el clic
  const handleClick = () => {
    if (text === "pendiente") {
      setText("cobrado");
      setColor("green");
    } else {
      setText("pendiente");
      setColor("red");
    }
  };

  return (
    <InvoiceInfoItemStyled>
      <div className="container-info">
        <h2 className="invoice-number">numero de factura</h2>
        <h2>cliente</h2>
        <h2 className="invoice-date">fecha</h2>
        <h2>importe</h2>
        <h2
          title='cambia el estado de la factura a "cobrado"'
          style={{
            backgroundColor: color,
            padding: "5px 10px",
            borderRadius: "20px",
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          {text}
        </h2>
      </div>

      <div className="container-edit">
        <button className="button-info" title="ver detalle">
          <FontAwesomeIcon icon={faEye} />
        </button>
        <button className="button-info" title="editar">
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button className="button-danger" title="eliminar factura">
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </InvoiceInfoItemStyled>
  );
};
