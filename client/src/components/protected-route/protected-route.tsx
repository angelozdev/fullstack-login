import React from 'react'
import { Navigate } from 'react-router'
import RoutesList from '~/constants/routes'
import { useAuth } from '~/providers/auth-provider'

interface IProtectedRouteProps {
  element: React.ReactNode
  redirectTo?: RoutesList
}

function ProtectedRoute(props: IProtectedRouteProps) {
  const { element, redirectTo = RoutesList.LOGIN } = props
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? element : <Navigate to={redirectTo} />
}

export default ProtectedRoute
