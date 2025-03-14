import { createContext } from 'react'
import { IUser } from '~/types/user'

interface IAuthContext {
  isAuthenticated: boolean
  logout: () => void
  user: IUser | null
  token: string | null
  isLogingIn: boolean
  isLoginError: boolean
  login: (data: { email: string; password: string }) => void
}

const AuthContext = createContext<null | IAuthContext>(null)

export default AuthContext
