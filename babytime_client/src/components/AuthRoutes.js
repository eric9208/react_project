import { Navigate, Outlet } from "react-router-dom";

const AuthRoutes = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/sign_in" />;
  //<Outlet /> allows whatever route you are trying to display to display if the isAuthenticated is true. Otherwise, it will redirect to sign in page.
};
export default AuthRoutes;
