import { createContext, ReactNode, useEffect, useState } from 'react';

import Router from 'next/router';
import { setCookie, parseCookies } from 'nookies';

import { signInRequest } from '../services/agencyAuth';
import api from '../services/api';
interface ProviderProps {
  children?: ReactNode;
}

interface Agency {
  id: string;
  agencyName: string;
}

interface SignInData {
  agencyName: string;
  password: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  agencySignIn: (date: SignInData) => Promise<void>;
  agency: Agency | null;
};

export const AgencyAuthContext = createContext({} as AuthContextType);

export function AgencyAuthProvider({ children }: ProviderProps) {
  const [agency, setAgency] = useState<Agency | null>(null);

  const isAuthenticated = !!agency;

  useEffect(() => {
    const { 'easytravel-agencytoken': token } = parseCookies();

    if (token) {
      api.get('/agency').then((data) => setAgency(data.data));
    }
  }, []);

  async function agencySignIn({ agencyName, password }: SignInData) {
    const { token, agency } = await signInRequest(agencyName, password);

    setCookie(undefined, 'easytravel-agencytoken', token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    setAgency(agency);

    Router.push(`/`);
  }

  return (
    <AgencyAuthContext.Provider
      value={{ isAuthenticated, agencySignIn, agency }}
    >
      {children}
    </AgencyAuthContext.Provider>
  );
}
