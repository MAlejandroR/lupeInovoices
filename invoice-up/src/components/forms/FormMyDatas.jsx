import { useState } from "react";

export const FormMyDatas = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    adress: "",
    phone: "",
    email: "",
  });
  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // envio info a dashboard
  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit(formData);
  };
  return (
    <section>
      <h2>Datos de mi empresa</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Razón social</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="adress">Direcció </label>
          <input
            type="text"
            name="adress"
            id="adress"
            value={formData.adress}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Teléfono</label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">email </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <button>enviar</button>
      </form>
    </section>
  );
};
