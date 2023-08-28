import { Results } from './../models/Results';
import { User } from "@models/User";
import axios from "axios";

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-type": "application/json"
  }
});

export const get = () => {
  return http.get<Results<User[]>>(`/users`);
};

export const create = data => {
  return http.post<Results<User>>("/user", data);
};

export const update = (id, data) => {
  return http.put<Results<User>>(`/user/${id}`, data);
};

export const remove = id => {
  return http.delete<Results<String>>(`/user/${id}`);
};

