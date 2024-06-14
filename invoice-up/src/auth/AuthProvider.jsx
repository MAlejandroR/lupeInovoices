/* import { useContex, useState, useEffect, createContext } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
});
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContex(AuthContext);
 */
import { Navigate, Outlet } from "react-router-dom";
export const AuthProvider = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
