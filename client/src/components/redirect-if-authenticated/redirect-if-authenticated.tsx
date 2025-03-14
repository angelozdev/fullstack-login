import { Navigate } from 'react-router'
import RoutesList from '~/constants/routes'
import { useAuth } from '~/providers/auth-provider'

interface IRedirectIfAuthenticatedProps {
  element: React.ReactNode
  redirectTo?: RoutesList
}

function RedirectIfAuthenticated({
  element,
  redirectTo = RoutesList.HOME
}: IRedirectIfAuthenticatedProps) {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? <Navigate to={redirectTo} replace /> : element
}

export default RedirectIfAuthenticated
