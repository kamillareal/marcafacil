import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import {
  ICreateReservationRequest,
  ICreateReservationResponse,
} from "./interfaces/request/create-reservation.interface";

import { IUserLoginRequest } from "./interfaces/request/login-user.interface";
import { IUserLoginResponse } from "./interfaces/response/user-login-response.interface";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("jwt-token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const logIn = (
  data: IUserLoginRequest
): Promise<AxiosResponse<IUserLoginResponse>> => {
  const { enrollment, password } = data;
  return api.post("/auth/user-signIn", { enrollment, password });
};

export const CreateReservation = (
  data: ICreateReservationRequest
): Promise<AxiosResponse<ICreateReservationResponse>> => {
  return api.post("reservation/create", data);
};
