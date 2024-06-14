import { useState } from "react";

export const FiltersInvoices = ({ onFilterChange }) => {
  const [estado, setEstado] = useState("todos");
  const [ordenarPor, setOrdenarPor] = useState("fecha");
  const [orden, setOrden] = useState("asc");

  const handleEstadoChange = (e) => {
    setEstado(e.target.value);
    onFilterChange({ estado: e.target.value, ordenarPor, orden });
  };

  /*   const handleOrdenarPorChange = (e) => {
    setOrdenarPor(e.target.value);
    onFilterChange({ estado, ordenarPor: e.target.value, orden });
  };

  const handleOrdenChange = (e) => {
    setOrden(e.target.value);
    onFilterChange({ estado, ordenarPor, orden: e.target.value });
  }; */

  return (
    <div>
      <label>
        Filtrar por estado:
        <select value={estado} onChange={handleEstadoChange}>
          <option value="todos">Todos</option>
          <option value="pendiente">Pendiente</option>
          <option value="cobrado">Cobrado</option>
        </select>
      </label>
      {/*      <label>
        Ordenar por:
        <select value={ordenarPor} onChange={handleOrdenarPorChange}>
          <option value="fecha">Fecha</option>
          <option value="importe">Importe</option>
        </select>
      </label>
      <label>
        Orden:
        <select value={orden} onChange={handleOrdenChange}>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </label> */}
    </div>
  );
};
