import { useState } from "react";
import { useEffect } from "react";
import { Tooltip } from "react-tooltip";
import {
  CalculatorStyled,
  Category,
  Cell,
  Subtitle,
  Table,
  Title,
} from "./CalculatorStyled";
import { ButtonInfo } from "../../components/atoms/buttons/ButtonInfo";

export const Calculator = () => {
  const [formData, setFormData] = useState({
    taxBase: "0",
    iva: "0",
    irpf: "0",
  });
  // ejecuta la función cada vez que se actualiza la constande de estado
  useEffect(() => {
    calculateResult();
  }, [formData]);

  const [price, setPrice] = useState(0);
  const [totalInvoice, setTotalInvoice] = useState(0);
  const [totalToReceive, setTotalToReceive] = useState(0);

  const handleClick = (ev) => {
    ev.preventDefault();
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onlyNumberAllow = (ev) => {
    if (isNaN(ev.key) && ev.key !== "Backspace" && ev.key !== "Enter") {
      ev.preventDefault();
    }
  };

  const calculate = (percentage) =>
    percentage * (parseInt(formData.taxBase) / 100);

  const calculateResult = () => {
    const ivaAmount = calculate(parseInt(formData.iva));
    console.log("ivaAmount", formData.iva, ivaAmount);
    const irpfAmount = calculate(parseInt(formData.irpf));
    console.log("irpf", formData.irpf, irpfAmount);
    const baseAmount = parseInt(formData.taxBase);
    console.log("base", baseAmount);

    setPrice((baseAmount + ivaAmount).toFixed(2));
    setTotalInvoice((baseAmount + ivaAmount - irpfAmount).toFixed(2));
    setTotalToReceive((baseAmount - irpfAmount).toFixed(2));
  };

  return (
    <>
      {" "}
      <CalculatorStyled>
        <form>
          <h2>Rellena los datos y obtén el importe final de tu factura</h2>
          <fieldset>
            <label>Base imponible (€)</label>
            <input
              type="text"
              id="taxBase"
              name="taxBase"
              value={formData.taxBase}
              onChange={handleChange}
              onKeyDown={onlyNumberAllow}
            />
          </fieldset>

          <fieldset>
            <label>Impuestos</label>
            <div>
              <input type="radio" id="iva" checked="checked" />
              <label htmlFor="iva">IVA (%)</label>

              <input
                type="number"
                id="iva"
                name="iva"
                value={formData.iva}
                max={21}
                min={0}
                title="Indica el IVA"
                onChange={handleChange}
              />
              <p>{calculate(formData.iva)}€</p>
              <ButtonInfo
                data-tooltip-id="tooltipIva"
                onClick={handleClick}
              ></ButtonInfo>
              <Tooltip id="tooltipIva" variant="light">
                <Table>
                  <Title>Tipos impositivos en el IVA</Title>

                  <tr>
                    <Category>Tipo </Category>
                    <Category>% </Category>
                    <Category>Tipo de bienes</Category>
                  </tr>
                  <tr>
                    <Cell>General</Cell>
                    <Cell>21%</Cell>
                    <Cell>
                      La mayoría de servicios y propductos como
                      electrodomésticos, coches, entradas de cine...
                    </Cell>
                  </tr>
                  <tr>
                    <Cell>Reducido</Cell>
                    <Cell>10%</Cell>
                    <Cell>
                      Actividades culturales, medios de transporte o
                      electricidad.
                    </Cell>
                  </tr>
                  <tr>
                    <Cell>Superreducido</Cell>
                    <Cell>4%</Cell>
                    <Cell>
                      Bienes de primera necesidad como alimentos esenciales o
                      viviendas de protección oficial.
                    </Cell>
                  </tr>
                  <tr>
                    <Cell>Sin IVA</Cell>
                    <Cell>0%</Cell>
                    <Cell>
                      Servicios y productos exentos(mascarillas, productos
                      financieros o servicios de asistencia sanitaria)
                    </Cell>
                  </tr>
                  <tr>
                    <Cell>IGIC general</Cell>
                    <Cell>7%</Cell>
                    <Cell>En lugar del IVA se cobra el IGIC en Canarias</Cell>
                  </tr>
                  <tr>
                    <Cell>IGIC reducido</Cell>
                    <Cell>3%</Cell>
                    <Cell>En lugar del IVA se cobra el IGIC en Canarias</Cell>
                  </tr>
                  <tr>
                    <Cell>IGIC incrementado</Cell>
                    <Cell>9,5%</Cell>
                    <Cell>En lugar del IVA se cobra el IGIC en Canarias</Cell>
                  </tr>
                </Table>
              </Tooltip>
            </div>
            <div>
              <input type="radio" id="irpf" checked="checked" />
              <label htmlFor="irpf">IRPF (%)</label>
              <input
                type="number"
                id="irpf"
                name="irpf"
                value={formData.irpf}
                max={15}
                min={0}
                title="Indica el IRPF"
                onChange={handleChange}
              />
              <p>{calculate(formData.irpf)}€</p>
              <ButtonInfo
                data-tooltip-id="tooltipIRPF"
                onClick={handleClick}
              ></ButtonInfo>
              <Tooltip id="tooltipIRPF" variant="light">
                <Table>
                  <Title>
                    Quién debe practicar retenciones IRPF y tipo a aplicar
                  </Title>
                  <Subtitle>
                    Autónomos dados de alta en actividades empresariales no
                    tiene que practicar retenciones
                  </Subtitle>
                  <Subtitle>
                    Cualquier autónomo que esté facturando a un particular o
                    empresa en el extranjero tampoco tiene que practicar
                    retenciones.
                  </Subtitle>

                  <tr>
                    <Category>Tipo de autónomo/actividad</Category>
                    <Category>% retención</Category>
                  </tr>
                  <tr>
                    <Cell>Nuevo autónomo</Cell>
                    <Cell>7%</Cell>
                  </tr>
                  <tr>
                    <Cell>General</Cell>
                    <Cell>15%</Cell>
                  </tr>
                  <tr>
                    <Cell>Alquileres o intereses</Cell>
                    <Cell>19%</Cell>
                  </tr>
                  <tr>
                    <Cell>
                      Actividades agrícolas,<br></br> ganaderas y avicultura
                    </Cell>
                    <Cell>1%</Cell>
                  </tr>
                  <tr>
                    <Cell>Actividades forestales</Cell>
                    <Cell>2%</Cell>
                  </tr>
                  <tr>
                    <Cell>Nuevo autónomo en Ceuta y Melilla</Cell>
                    <Cell>2,8%</Cell>
                  </tr>
                  <tr>
                    <Cell>General(Ceuta y Melilla)</Cell>
                    <Cell>6%</Cell>
                  </tr>
                  <tr>
                    <Cell>Alquileres o intereses(Ceuta y Melilla)</Cell>
                    <Cell>7,6%</Cell>
                  </tr>
                </Table>
              </Tooltip>
            </div>
          </fieldset>
        </form>

        <section>
          <div>
            <p>Precio con IVA:</p>
            <p>{price}€</p>

            <p>TOTAL FACTURA:</p>
            <p>{totalInvoice}€</p>
          </div>

          <div>
            <p>Neto sin IVA:</p>
            <p>{totalToReceive}€</p>
          </div>
        </section>
      </CalculatorStyled>
    </>
  );
};
