import { createContext, ReactNode, useEffect, useState } from 'react';
import { useJwt } from 'react-jwt';

import Router from 'next/router';
import { setCookie, parseCookies } from 'nookies';

import api from '../services/api';
import { signInRequest } from '../services/auth';
interface ProviderProps {
  children?: ReactNode;
}

interface User {
  id: string;
  is_admin: boolean;
  username: string;
}

interface SignInData {
  username: string;
  password: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: (date: SignInData) => Promise<void>;
  user: User | null;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: ProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'easytravel-token': token } = parseCookies();

    if (token) {
      api.get('/user').then((data) => setUser(data.data));
    }
  }, []);

  async function signIn({ username, password }: SignInData) {
    const { token, user } = await signInRequest(username, password);

    setCookie(undefined, 'easytravel-token', token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    setUser(user);

    Router.push('/');
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}
