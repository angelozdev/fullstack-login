import { useQuery } from "@tanstack/react-query";
import { createContext, useCallback, useContext, useMemo } from "react";
import LocalStorage, { LSKeys } from "~/libs/ls";
import { queryClient } from "~/libs/react-query";
import accountServices from "~/services/account";
import { IUser } from "~/types/user";

interface IAuthData {
  token: string;
  userId: string;
}

interface IAuthContext {
  isAuthenticated: boolean;
  logout: () => void;
  user: IUser | null;
}

const AuthContext = createContext<null | IAuthContext>(null);

interface IAuthProviderProps {
  children: React.ReactNode;
}

const tokenStorage = new LocalStorage<IAuthData>(LSKeys.TOKEN);

export function AuthProvider({ children }: IAuthProviderProps) {
  const { data: loggedUser = null, isSuccess } = useQuery({
    queryKey: ["user", "me"],
    queryFn: accountServices.getLoggedUser,
    staleTime: 1000 * 60 * 60, // 1 hour
    retry: false,
  });

  const isAuthenticated = !!loggedUser && isSuccess;

  const logout = useCallback(async () => {
    tokenStorage.remove();
    await queryClient.invalidateQueries({ queryKey: ["user", "me"] });
    queryClient.removeQueries({ queryKey: ["user", "me"] });
  }, []);

  const value = useMemo(
    () => ({ isAuthenticated, logout, user: loggedUser }),
    [loggedUser, isAuthenticated, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
