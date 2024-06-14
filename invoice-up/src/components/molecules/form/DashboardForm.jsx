import axios from "axios";
import { useState, useEffect } from "react";
import { DashboardFormStyled } from "./DashboardFormStyled";
import { Button } from "../../atoms/buttons/Button";
import { AccordionFieldset } from "./AccordionFieldset";
import GetAvatar from "../../atoms/getLogo/GetAvatar";
import { config } from "@fortawesome/fontawesome-svg-core";
export const DashboardForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    template: "classic",
    logo: null,
    number_invoice: "",
    company_name: "",
    company_address: "",
    company_phone: "",
    company_mail: "",
    company_cif: "",
    client_name: "",
    client_address: "",
    client_phone: "",
    client_mail: "",
    client_cif: "",
    iva: "",
    iva_amount: "",
    irpf: "",
    irpf_amount: "",
    issue_date: "",
    expiration_date: "",
    service: "",
    quantity: "",
    price: "",
    id: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    onSubmit(form);
  }, [form]);

  const generateNumberInvoice = () => {
    // Generar un código alfanumérico de 6 caracteres para el número de factura
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    console.log(`code para number_invoice -${code}-`);

    setForm({
      ...form,
      number_invoice: code,
    });
    console.log(form);
  };

  const updateAvatar = (avatar) => {
    // Actualiza el logo
    setForm({
      ...form,
      logo: avatar,
    });
    console.log (avatar);
  };
  const handleChange = (ev) => {
    // Actualiza el estado de 'form' con el valor del campo de entrada
    const {name, value, files} = ev.target;
    if (name === "logo") {
      setForm({
        ...form,
        logo: files[0],
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
    // };

    //send data to dashboard
    /*   const handleSubmit = (ev) => {
      ev.preventDefault();
      //** OJO ** hay que hacer comprovación si falta algún input por rellenar
      // validaciones
      // call to backend
      generateNumberInvoice();
      onSubmit(form);

      //volver al estado inicial del formurario
      // resetForm();
    }; */
  }
  const validateEmail = (email) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let formErrors = {};

    if (!form.client_mail || !form.company_mail) {
      formErrors.email = "El campo 'Email' es requerido.";
    } else if (
      !validateEmail(form.client_mail) ||
      !validateEmail(form.company_mail)
    ) {
      formErrors.email = "El formato del email no es válido.";
    }

    if (!form.client_address) {
      formErrors.number_invoice = "El campo 'Número de Factura' es requerido.";
      console.log(formErrors);
    }

    // Agrega más validaciones para los demás campos

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  /*   const handleSubmit = async (ev) => {
    ev.preventDefault();
    generateNumberInvoice();
    validateForm();

    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });
    console.log("FORM DATA:", formData);
    try {
      // Realiza la llamada a axios para enviar datos al servidor
      const response = await axios.post(
        "http://127.0.0.1:8000/api/invoices",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  }; */

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    generateNumberInvoice();

    if (validateForm()) {
      try {
        const formData = new FormData();
        Object.entries(form).forEach(([key, value]) => {
          formData.append(key, value);
        });

        await axios.post("http://127.0.0.1:8000/api/invoices", formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',

            }}
          );
        onSubmit(form);
      } catch (error) {
        console.error("Error al enviar los datos de la factura:", error);
      }
    }
  };

  return (
    <DashboardFormStyled onSubmit={handleSubmit}>
      <h1>Mi códico generado:</h1>
      <h1>{form.number_invoice}</h1>

      <fieldset>
        <legend>Elige diseño</legend>

        <div className="desing">
          <div>
            <input
              className="inputRadio"
              type="radio"
              name="template"
              id="classic"
              value="classic"
              checked={form.template === "classic"}
              onChange={handleChange}
            />
            <label htmlFor="Classic" className="labelRadio">
              Clásico
            </label>
          </div>
          <div>
            {" "}
            <input
              className="inputRadio"
              type="radio"
              name="template"
              id="moderno"
              value="moderno"
              checked={form.template === "moderno"}
              onChange={handleChange}
            />
            <label htmlFor="Moderno" className="labelRadio">
              Moderno
            </label>
          </div>

          <div>
            {" "}
            <input
              className="inputRadio"
              type="radio"
              name="template"
              id="minimal"
              value="minimal"
              checked={form.template === "minimal"}
              onChange={handleChange}
            />
            <label htmlFor="Minimal" className="labelRadio">
              Minimal
            </label>
          </div>
        </div>
        <GetAvatar avatar={form.Logo} updateAvatar={updateAvatar}></GetAvatar>
      </fieldset>
      <AccordionFieldset title="Datos del Emisor">
        <input
          type="text"
          name="company_name"
          id="company_name"
          placeholder="nombre de emisor"
          value={form.company_name}
          onChange={handleChange}
          required=""
          maxLength="40"
        />
        <input
          type="text"
          name="company_address"
          id="company_address"
          placeholder="dirección"
          value={form.company_address}
          onChange={handleChange}
          aria-label="dirección del emisor"
          required=""
          maxLength="240"
        />
        <div className="input-group">
          <input
            type="number"
            name="company_phone"
            id="company_phone"
            placeholder="Teléfono"
            value={form.company_phone}
            onChange={handleChange}
            aria-label="teléfono del emisor"
            required=""
            maxLength="9"
          />
          <input
            type="text"
            name="company_cif"
            id="company_cif"
            placeholder="cif"
            value={form.company_cif}
            onChange={handleChange}
            aria-label="cif del emisor"
            required=""
            maxLength="9"
          />
        </div>

        <input
          type="email"
          name="company_mail"
          id="company_mail"
          placeholder="tuemail@rmail.com"
          value={form.company_mail}
          onChange={handleChange}
          aria-label="email del emisor"
          required=""
          // pattern="[a-zA-Z0-9!#$%&amp;'*_+-]([\.]?[a-zA-Z0-9!#$%&amp;'*_+-])+@[a-zA-Z0-9]([^@&amp;%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?"
        />
      </AccordionFieldset>

      <AccordionFieldset title="Datos del cliente">
        <input
          type="text"
          name="client_name"
          id="client-name"
          placeholder="nombre de cliente"
          value={form.client_name}
          onChange={handleChange}
          aria-label="nombre de cliente"
          required=""
          maxLength="40"
        />
        <input
          type="text"
          name="client_address"
          id="client_address"
          placeholder="dirección"
          value={form.client_address}
          onChange={handleChange}
          aria-label="dirección del cliente"
          required=""
          maxLength="240"
        />
        <div className="input-group">
          <input
            type="number"
            name="client_phone"
            id="client_phone"
            placeholder="Teléfono"
            value={form.client_phone}
            onChange={handleChange}
            aria-label="teléfono del cliente"
            required=""
            maxLength="9"
          />
          <input
            type="text"
            name="client_cif"
            id="client_cif"
            placeholder="cif"
            value={form.client_cif}
            onChange={handleChange}
            aria-label="cif del cliente"
            required=""
            maxLength="9"
          />
        </div>

        <input
          type="email"
          name="client_mail"
          id="client_mail"
          placeholder="emaildelcliente@mail.com"
          value={form.client_mail}
          onChange={handleChange}
          aria-label="email del cliente"
          required=""
          // pattern="[a-zA-Z0-9!#$%&amp;'*_+-]([\.]?[a-zA-Z0-9!#$%&amp;'*_+-])+@[a-zA-Z0-9]([^@&amp;%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?"
        />
      </AccordionFieldset>

      <AccordionFieldset title="Datos del servicio">
        <input
          type="text"
          name="service"
          id="service"
          placeholder="servicio"
          value={form.service}
          onChange={handleChange}
        />
        <div className="input-group">
          <input
            type="number"
            name="price"
            id="price"
            placeholder="importe"
            value={form.price}
            onChange={handleChange}
          />
          <input
            type="number"
            name="quantity"
            id="quuantity"
            placeholder="cantidad"
            value={form.quantity}
            onChange={handleChange}
            aria-label="cantidad"
          />
        </div>
        <div className="input-group">
          <input
            type="number"
            name="iva"
            id="iva"
            placeholder="iva"
            value={form.iva}
            onChange={handleChange}
            aria-label="porcentage de IVA"
          />
          <input
            type="number"
            name="irpf"
            id="irpf"
            placeholder="irpf"
            value={form.irpf}
            onChange={handleChange}
            aria-label="porcentage de IRPF"
          />
        </div>

        <div className="input-group">
          <label htmlFor="issueDate">
            <p>Fecha de emisión</p>
            <input
              type="date"
              name="issue_date"
              id="issue_date"
              placeholder="fecha de emisión"
              value={form.issue_date}
              onChange={handleChange}
              aria-label="fecha de emisión de factura"
            />
          </label>
          <label htmlFor="expirationDate">
            <p>Fecha de vencimiento</p>
            <input
              type="date"
              name="expiration_date"
              id="expiration_date"
              placeholder="fecha de vencimiento"
              value={form.expiration_date}
              onChange={handleChange}
              aria-label="fecha de vencimietno de factura"
            />
          </label>
        </div>
      </AccordionFieldset>
      {Object.keys(errors).map((key) => (
        <div key={key} className="error">
          {errors[key]}
        </div>
      ))}

      <Button type="submit" action="Generar Factura"></Button>
    </DashboardFormStyled>
  );
};
