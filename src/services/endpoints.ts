import { API_CONFIG } from "../config/apiConfig";

const API_BASE_URL: string = API_CONFIG.BASE_URL;

export const endpoints = {
  // Autenticación
  LOGIN: `${API_BASE_URL}/auth/login`,
  REGISTER: `${API_BASE_URL}/auth/register`,
  LOGOUT: `${API_BASE_URL}/auth/logout`,
};
