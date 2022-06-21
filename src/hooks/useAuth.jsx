import { createContext, useContext, useState } from "react";
import { auth } from "../server/firebase";
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const [isAuth, setIsAuth] = useState();
  const context = useContext(AuthContext);

  return context;
}
