import React from "react";
import { Navigate } from "react-router";
import RoutesList from "~/constants/routes";

interface IProtectedRouteProps {
  element: React.ReactNode;
  redirectTo?: RoutesList;
}

function ProtectedRoute(props: IProtectedRouteProps) {
  const { element, redirectTo = RoutesList.LOGIN } = props;
  const isLogged = false;

  return isLogged ? element : <Navigate to={redirectTo} />;
}

export default ProtectedRoute;
