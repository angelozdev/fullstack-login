import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import LocalStorage, { LSKeys } from "~/libs/ls";
import { queryClient } from "~/libs/react-query";
import accountServices from "~/services/account";
import { IUser } from "~/types/user";

interface IAuthContext {
  isAuthenticated: boolean;
  logout: () => void;
  user: IUser | null;
  token: string | null;
  isLogingIn: boolean;
  isLoginError: boolean;
  login: (data: { email: string; password: string }) => void;
}

const AuthContext = createContext<null | IAuthContext>(null);

interface IAuthProviderProps {
  children: React.ReactNode;
}

const tokenStorage = new LocalStorage<string>(LSKeys.TOKEN);

export function AuthProvider({ children }: IAuthProviderProps) {
  const [token, setToken] = useState(tokenStorage.get(null));
  const { data: loggedUser = null } = useQuery({
    queryKey: ["user", "me"],
    queryFn: () => accountServices.getLoggedUser(tokenStorage.get()),
    staleTime: 1000 * 60 * 60, // 1 hour
    retry: false,
    enabled: !!token,
  });

  const {
    mutate: login,
    isPending: isLogingIn,
    isError: isLoginError,
  } = useMutation({
    mutationFn: accountServices.login,
    onSuccess: ({ token }) => {
      tokenStorage.set(token);
      setToken(token);
    },
  });

  const isAuthenticated = !!token;

  const logout = useCallback(async () => {
    tokenStorage.remove();
    setToken(null);
    queryClient.clear();
  }, []);

  const value = useMemo(
    () => ({
      isAuthenticated,
      logout,
      user: loggedUser,
      token,
      login,
      isLogingIn,
      isLoginError,
    }),
    [
      loggedUser,
      isAuthenticated,
      logout,
      token,
      login,
      isLogingIn,
      isLoginError,
    ]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
