import { createContext, useContext, useMemo, useState } from "react";
import LocalStorage, { LSKeys } from "~/libs/ls";
import { IUser } from "~/types/user";

interface IAuthContext {
  user: IUser | null;
  setUser: (user: IUser) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<null | IAuthContext>(null);

interface IAuthProviderProps {
  children: React.ReactNode;
}

const userStorage = new LocalStorage<IUser>(LSKeys.LOGGED_USER);

export function AuthProvider({ children }: IAuthProviderProps) {
  const [user, setUser] = useState<IUser | null>(userStorage.get());
  const isAuthenticated = !!user;

  const value = useMemo(
    () => ({ user, setUser, isAuthenticated }),
    [user, isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
