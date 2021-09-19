import api from './api';

interface User {
  id: string;
  is_admin: boolean;
  username: string;
}

interface SignInReturn {
  user: User;
  token: string;
}

export async function signInRequest(
  username: string,
  password: string
): Promise<SignInReturn> {
  const loginData = await api.post('/users/login', {
    username,
    password,
  });
  const response: SignInReturn = {
    user: loginData.data.user,
    token: loginData.data.token,
  };

  return response;
}
