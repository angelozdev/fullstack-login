import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import LocalStorage, { LSKeys } from "~/libs/ls";
import { IUser } from "~/types/user";

interface IAuthData {
  token: string;
  user: IUser;
}

interface IAuthContext {
  setData: (data: IAuthData) => void;
  isAuthenticated: boolean;
  logout: () => void;
  data: IAuthData | null;
}

const AuthContext = createContext<null | IAuthContext>(null);

interface IAuthProviderProps {
  children: React.ReactNode;
}

const userStorage = new LocalStorage<IAuthData>(LSKeys.LOGGED_USER);

export function AuthProvider({ children }: IAuthProviderProps) {
  const [data, setData] = useState<IAuthData | null>(() =>
    userStorage.get(null, (error) => {
      console.error(error);
      userStorage.remove();
    })
  );

  const isAuthenticated = !!data?.token && !!data?.user;

  const logout = useCallback(() => {
    setData(null);
    userStorage.remove();
  }, []);

  const value = useMemo(
    () => ({ isAuthenticated, logout, data, setData }),
    [data, isAuthenticated, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
