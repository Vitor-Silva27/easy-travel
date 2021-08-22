import { createContext, ReactNode } from 'react';

interface ProviderProps {
  children?: ReactNode;
}

interface AuthContext {
  isAuthenticated: boolean;
}

export const AuthContext = createContext({} as AuthContext);

export function AuthProvider({ children }: ProviderProps) {
  const isAuthenticated = false;

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
