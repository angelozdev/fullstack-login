import AuthContext from './context'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useCallback, useEffect, useMemo } from 'react'
import { useLocalStorage } from '~/hooks'
import { LSKeys } from '~/libs/ls'
import { queryClient } from '~/libs/react-query'
import accountServices from '~/services/account'

interface IAuthProviderProps {
  children: React.ReactNode
}

function AuthProvider({ children }: IAuthProviderProps) {
  const [token, setToken, removeToken] = useLocalStorage<string | null>(
    LSKeys.TOKEN
  )

  const { data: loggedUser = null, isError } = useQuery({
    queryKey: ['user', 'me'],
    queryFn: () => accountServices.getLoggedUser(token),
    staleTime: 1000 * 60 * 60, // 1 hour
    retry: false,
    enabled: !!token
  })

  const {
    mutate: login,
    isPending: isLogingIn,
    isError: isLoginError
  } = useMutation({
    mutationFn: accountServices.login,
    onSuccess: ({ token }) => setToken(token)
  })

  const isAuthenticated = !!token

  const logout = useCallback(() => {
    removeToken()
    queryClient.clear()
  }, [removeToken])

  useEffect(() => {
    if (isError) logout()
  }, [isError, logout])

  const value = useMemo(
    () => ({
      isAuthenticated,
      logout,
      user: loggedUser,
      token,
      login,
      isLogingIn,
      isLoginError
    }),
    [
      loggedUser,
      isAuthenticated,
      logout,
      token,
      login,
      isLogingIn,
      isLoginError
    ]
  )

  return <AuthContext value={value}>{children}</AuthContext>
}

export default AuthProvider
