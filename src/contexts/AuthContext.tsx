import { createContext, ReactNode } from 'react';

import Router from 'next/router';
import { setCookie } from 'nookies';

import api from '../services/api';
interface ProviderProps {
  children?: ReactNode;
}

interface SignInData {
  username: string;
  password: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: (date: SignInData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: ProviderProps) {
  const isAuthenticated = false;

  async function signIn({ username, password }: SignInData) {
    const token = await api.post('/users/login', {
      username,
      password,
    });
    setCookie(undefined, 'easytravel-token', token.data, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    Router.push('/');
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
