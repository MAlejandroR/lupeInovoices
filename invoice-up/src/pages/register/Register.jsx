import axios from "axios";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/atoms/buttons/Button";
import { RegisterStyled } from "./RegisterStyled";
import image from "../../assets/welcome.png";
import { Header } from "../../components/layout/header/Header";
import { UserContext } from "../../context/UserContext"; // Importa el contexto del usuario

export const Register = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext); // Usa el contexto del usuario
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "El nombre de usuario es obligatorio.";
    if (!form.email) newErrors.email = "El correo electrónico es obligatorio.";
    if (!form.password) {
      newErrors.password = "La contraseña es obligatoria.";
    } else if (form.password.length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres.";
    }
    return newErrors;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Genial, tu cuenta ha sido creada");
    console.log("Data:", form);

    try {
      // Realizar la llamada Axios para enviar datos al servidor

      const response = await axios.post(
        "http://127.0.0.1:8000/api/register",
        form
      );
      // Verifica si existe un token en la respuesta de la API
      if (response.data.token) {
        // Si hay un token, almacénalo en el localStorage del navegador
        localStorage.setItem("token", response.data.token);
        setUser(form.name); // Actualiza el contexto con el nombre del usuario
        // Redirige al usuario a la página principal
        console.log("Redirigiendo a dashboard...");
        console.log("contexto", setUser);
        return navigate("/dashboard");
      }

      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      // Manejar errores en la llamada Axios
      console.error("Error al enviar datos:", error);
    }

    //reset form
    setUser(form.name);
    navigate("/dashboard");
    setForm({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Header></Header>
      <RegisterStyled>
        <div>
          <img src={image} alt="" />
          <form onSubmit={handleSubmit}>
            {" "}
            <h1>Welcome</h1>
            <h3>Nos alegra tenerte a bordo</h3>
            <label htmlFor="name">
              Nombre de usuario
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                required
              ></input>
              {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            </label>
            <label htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@email.com"
                value={form.email}
                onChange={handleInputChange}
                required
              ></input>
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </label>
            <label htmlFor="password">
              Contraseña
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleInputChange}
                required
              ></input>
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password}</p>
              )}
            </label>
            <Button action="Crear cuenta"></Button>
            <Link to="/login">
              {" "}
              <Button action="Log in" variant="outline"></Button>
            </Link>
          </form>
        </div>
      </RegisterStyled>
    </>
  );
};
