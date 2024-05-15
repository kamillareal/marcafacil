import axios, { AxiosResponse } from "axios";
import { IUserLoginRequest } from "./interfaces/request/login-user.interface";
import { IUserLoginResponse } from "./interfaces/response/user-login-response.interface";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const logIn = (
  data: IUserLoginRequest
): Promise<AxiosResponse<IUserLoginResponse>> => {
  const { enrollment, password } = data;
  return api.post("/auth/user-signIn", { enrollment, password });
};
