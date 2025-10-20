import axios, { AxiosError } from "axios";
import type { AxiosResponse } from "axios";
import { API_CONFIG } from "../config/apiConfig";

const API_BASE_URL: string = API_CONFIG.BASE_URL;

// Instancia de Axios
const api = axios.create({ baseURL: API_BASE_URL });

// Tipos para las respuestas de la API
// Modularizar los Types mas adelante
export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data: T;
}

export interface ApiError {
  success: boolean;
  message: string;
  error?: string;
}

// Función para hacer peticiones GET
export const getData = async <T = unknown>(url: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.get(url, { withCredentials: true });

    // response.data sería: [medications] ← Esto debería funcionar
    return response.data as T;
  } catch (error: unknown) {
    const axiosError = error as AxiosError;
    console.log("Error:", axiosError);
    throw error;
  }
};

// Función para hacer peticiones POST
export const postData = async <T = unknown>(
  url: string,
  data: unknown
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.post(url, data, { withCredentials: true });
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError;
    console.log("Error:", axiosError);
    throw error;
  }
};

// Función para hacer peticiones PUT
export const putData = async <T = unknown>(
  url: string,
  data: unknown
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.put(url, data);
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError;
    console.log("Error:", axiosError);
    throw error;
  }
};

// Función para hacer peticiones DELETE
export const deleteData = async <T = unknown>(url: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.delete(url);
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError;
    console.log("Error:", axiosError);
    throw error;
  }
};

export default api; // Exportar la instancia de Axios para uso directo si es necesario
