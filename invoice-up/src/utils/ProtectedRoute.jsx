import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

// con esto validamos si el usuario esta o no autenticado
/* export const ProtectedRoute = () => {
  const [isAuth, setIsAuth] = useState(true);

  return isAuth ? <Outlet /> : <Navigate to="/register" replace />;
}; */

// si isAuth es true nos mostrará lo que hay de trñas de Outlet que en este caso es el DashBoard, de lo contrario mostrará el dformulario de registro
// en un futuro si es false o true lo determinará la respuesta del backend

// Componente ProtectedRoute que toma un objeto de propiedades (children)
export const ProtectedRoute = ({ children }) => {
  // Verifica si hay un token de autenticación almacenado en el localStorage del navegador
  const loginToken = localStorage.getItem("token");

  // Si no hay un token de autenticación, redirige al usuario a la página de inicio de sesión
  if (!loginToken) {
    return <Navigate to="/register" />;
  }

  // Si hay un token de autenticación, permite que se renderice el contenido protegido
  return <>{children}</>;
};
