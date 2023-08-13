import { httpCLient } from "./httpClient";

interface SignupParams {
  name: string;
  email: string;
  password: string;
}

async function signup(params: SignupParams) {
  const { data } = await httpCLient.post<{ accessToken: string }>('/auth/signup', params);

  return data;
}

export const authService = {
  signup
}
