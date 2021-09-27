import api from './api';

interface Agency {
  id: string;
  agencyName: string;
}

interface SignInReturn {
  agency: Agency;
  token: string;
}

export async function signInRequest(
  agencyName: string,
  password: string
): Promise<SignInReturn> {
  const loginData = await api.post('/agencies/login', {
    agencyName,
    password,
  });
  const response: SignInReturn = {
    agency: loginData.data.agency,
    token: loginData.data.token,
  };

  return response;
}
