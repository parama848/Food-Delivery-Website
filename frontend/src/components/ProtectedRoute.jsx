import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(CartContext);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
